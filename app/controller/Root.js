/**
 * The main application controller. This is a good place to handle things like routes.
 */
Ext.define('Push.controller.Root', {
	extend : 'Ext.app.Controller',
	requires : ['Push.view.*'],
	stores : ['Companies'],
	config : {
		control : {
			'#enter' : {
				handler : 'onEnterApp'
			}
		},
		refs : {
			viewport : 'viewport',
			contentPanel : 'contentPanel'
		},
		routes : {
		}
	},
	onEnterApp : function(data) {
		Ext.widget('array-grid',{a:'111'});
		// this.redirectTo('array-grid');
		
	},
});
