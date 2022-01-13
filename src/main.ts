import { Application, VLayout } from './x4deps.js';

/**
 * 
 */

class MainFrame extends VLayout {
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
myApp.mainView = new MainFrame( {
	flex: 1
});


