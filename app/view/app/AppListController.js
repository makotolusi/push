Ext.define('Push.view.app.AppListController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.app-list-view',

	onEnter : function(grid, rowIndex, colIndex) {
		console.log('-------onenter');
		    Ext.Viewport.setActiveItem(1);
		// this.redirectTo('array-grid');
		
	}
}); 