/**
 * This example demonstrates using a paging display.
 */
Ext.define('Push.view.contentType.ContentTypeList', {
	extend : 'Ext.grid.Panel',

	requires : ['Ext.data.*', 'Ext.grid.*', 'Ext.util.*', 'Ext.toolbar.Paging', 'Push.model.grid.ForumThread'],
	xtype : 'content-type-list-grid',

	//<example>
	exampleTitle : '内容类型列表',
	otherContent : [{
		type : 'Store',
		path : 'app/store/ForumThreads.js'
	}, {
		type : 'Model',
		path : 'app/model/grid/ForumThread.js'
	}],
	themes : {
		classic : {
			width : 600,
			percentChangeColumnWidth : 75,
			lastUpdatedColumnWidth : 85
		}
	},
	//</example>

	height : 700,
	width : 600,
	frame : true,
	title : '内容类型列表',
	disableSelection : true,
	loadMask : true,

	initComponent : function() {
		var states = Ext.create('Ext.data.Store', {
			fields : ['abbr', 'name'],
			data : [{
				"abbr" : "AL",
				"name" : "IOS"
			}, {
				"abbr" : "AK",
				"name" : "ANDROID"
			}
			//...
			]
		});

		// this.width = this.themeInfo.width;
		var pluginExpanded = false;
		// create the Data Store
		var store = Ext.create('Push.store.ForumThreads');
		store.proxy.extraParams = {
			active : '1'
		};
		Ext.apply(this, {
			store : store,
			viewConfig : {
				id : 'gv',
				trackOver : false,
				stripeRows : false
			},
			// grid columns
			columns : [{
				text : "ID",
				dataIndex : 'username',
				width : 100,
				hidden : false,
				sortable : true
			}, {
				// id assigned so we can apply custom css (e.g. .x-grid-cell-topic b { color:#333 })
				// TODO: This poses an issue in subclasses of Grid now because Headers are now Components
				// therefore the id will be registered in the ComponentManager and conflict. Need a way to
				// add additional CSS classes to the rendered cells.
				text : "名称",
				dataIndex : 'title',
				flex : 1,
				// renderer: this.renderTopic,
				sortable : false
			}, {
				text : "描述",
				dataIndex : 'username',
				width : 150,
				hidden : false,
				sortable : true
			}],
			// inline buttons

			dockedItems : [{
				xtype : 'toolbar',
				items : [{
					text : '新增类型',
					handler : function() {
						var win = Ext.create('Push.view.push.PushForm');
						win.show();
					}
				}]
			}],
			// paging bar on the bottom
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				items : ['-']
			})
		});
		this.callParent();
	}
});
