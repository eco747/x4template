import { Application, VLayout, Label, html } from './x4deps.js';

/**
 * 
 */

class MainFrame extends VLayout {
	render( ) {
		this.setContent( [
			new Label( { tag: 'h1', text: "<h1>Hello from X4</h1>" } );
		])
	}
}

/**
 * 
 */

class DemoApp extends Application {
	constructor( ) {
		super( {
			app_name: 'Demo App',
			app_version: '1.0',
			app_uid: 'demo.x4.com',
			locale: 'fr-fr'
		});
	}
}


const myApp = new DemoApp( );
myApp.mainView = new MainFrame( {} );


