/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Push.Application', {
	extend : 'Ext.app.Application',
	name : 'Push',
	namespace : 'Push',

	requires : [
	    'Push.view.login.Login'],

	views : [
'login.Login','form.FieldTypes',
	'app.AppList', 'push.PushList', 'push.PushListTabs',
	'navigation.Breadcrumb', 'Header', 'ContentPanel', 'navigation.Tree', 'grid.ArrayGrid', 'grid.Paging', 'grid.GridPlugins', 'form.HBoxLayoutForm','form.RadioGroupForm'
	],

	controllers : [
	'Global'
	// TODO: add controllers here
	],

	stores : ['States'],
	
	model:['State'],

	init : function() {

        
             // var session = this.session = new Ext.data.Session();
//         
        // this.login = new Push.view.login.Login({
            // session: session,
            // autoShow: true
        // });
		// if ('nocss3' in Ext.Object.fromQueryString(location.search)) {
			// Ext.supports.CSS3BorderRadius = false;
			// Ext.getBody().addCls('x-nbr x-nlg');
		// }
// 
		var me = this, map = Ext.Object.fromQueryString(location.search), charts = ('charts' in map) && !/0|false|no/i.test(map.charts);
		Ext.create('Push.store.Navigation', {
			storeId : 'navigation'
		});
// 
		// Set the default route to start the application.
		me.setDefaultToken('all');
// 
		// Ext.setGlyphFontFamily('Pictos');
		// Ext.tip.QuickTipManager.init();
		// Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
	}
});
