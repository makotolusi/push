Ext.define('Push.view.app.AppListController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.app-list-view',
  config: {
        control: {
        },
        refs: {
            contentPanel: 'contentPanel'
        },
        routes  : {
        }
    },
	onEnter : function(grid, rowIndex, colIndex) {
		 this.redirectTo('push-list-tabs');
		 
            // contentPanel = Ext.getCmp('content-panel');
                         // contentPanel.removeAll(true);
		// console.log('-------onenter');
            // contentPanel.body.addCls('kitchensink-example');
            // className = Ext.ClassManager.getNameByAlias('widget.basic-tabs');
//             	 
            // ViewClass = Ext.ClassManager.get(className);
                  // console.log(ViewClass);
                     // cmp = new ViewClass();
                        // contentPanel.add(cmp);
//                     
	}
}); 