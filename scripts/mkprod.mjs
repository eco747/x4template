import fs from 'node:fs';
import path from 'node:path';
import sh from 'shelljs';

const Reset 		= "\x1b[0m"
const FgYellow 		= "\x1b[33m"

let curStep = 1;
function step( text ) {
	sh.echo( `${FgYellow}[${curStep++}]${Reset} ${text}` );
}

sh.echo( "mkprod v1.0" );

//--------------------
step( 'preparation...' );

// read tsconfig file & change setting for a production build
const raw_tsconfig = fs.readFileSync( 'tsconfig.json', { encoding: 'utf-8' } );
let tsconfig = parseJSON( raw_tsconfig );
tsconfig.compilerOptions.incremental = false;
tsconfig.compilerOptions.pretty = false;
tsconfig.compilerOptions.declaration = false;
tsconfig.compilerOptions.outFile = "prod/main.js";
tsconfig.compilerOptions.module = "amd";
tsconfig.compilerOptions.sourceMap = false;
delete tsconfig.compilerOptions.outDir,
fs.writeFileSync( 'tsconfig.prod.json', JSON.stringify(tsconfig), { encoding: 'utf-8' } );

sh.mkdir( "-p", "prod/" );

//--------------------
step( 'copie des ressources...' );
sh.cp( "-r", "dist/*", "prod/" );

//--------------------
step( 'compilation...' );
sh.exec( "tsc -p tsconfig.prod.json" );

//--------------------
step( 'compression & mangle...' );
sh.exec( 'terser --toplevel --keep-classnames --compress --comments false --mangle --output prod/src/main.js -- prod/main.js' );

//--------------------
step( 'nettoyage...' );
sh.rm( "prod/main.js" );
sh.rm( "-rf", "prod/x4" );
sh.rm( "tsconfig.prod.tsbuildinfo" );


function parseJSON( json ) {
	const fn = new Function( 'return ' + json );
	return fn( );
}