/**
 * This example demonstrates using a paging display.
 */
Ext.define('Push.view.app.AppList', {
	extend : 'Ext.grid.Panel',

	requires : ['Ext.data.*', 'Ext.grid.*', 'Ext.util.*', 'Ext.toolbar.Paging', 'Push.model.grid.ForumThread', 'Push.view.app.AppListController'],
	xtype : 'app-list-grid',
	controller : 'app-list-view',
	//<example>
	exampleTitle : '应用列表',
	otherContent : [{
		type : 'Store',
		path : 'app/store/ForumThreads.js'
	}, {
		type : 'Model',
		path : 'app/model/grid/ForumThread.js'
	}],
	themes : {
		classic : {
			width : 1000,
			percentChangeColumnWidth : 75,
			lastUpdatedColumnWidth : 85
		},
		neptune : {
			width : 1000,
			percentChangeColumnWidth : 100,
			lastUpdatedColumnWidth : 115
		}
	},
	//</example>

	height : 700,
	width : 1850,
	frame : true,
	title : '应用列表',
	disableSelection : true,
	loadMask : true,

	initComponent : function() {
		this.width = this.themeInfo.width;
		var pluginExpanded = false;

		// create the Data Store
		var store = Ext.create('Push.store.ForumThreads');
		store.proxy.extraParams = {
			active : '1'
		};
		// store.load({
		// params: {
		// group: 3,
		// type: 'user'
		// },
		// callback: function(records, operation, success) {
		// // do something after the load finishes
		// },
		// scope: this
		// });
		Ext.apply(this, {
			store : store,
			viewConfig : {
				id : 'gv',
				trackOver : false,
				stripeRows : false
				// plugins: [{
				// ptype: 'preview',
				// bodyField: 'excerpt',
				// expanded: pluginExpanded,
				// pluginId: 'preview'
				// }]
			},
			// grid columns
			columns : [{
				text : "应用ID",
				dataIndex : 'username',
				width : 100,
				hidden : false,
				sortable : true
			}, {
				// id assigned so we can apply custom css (e.g. .x-grid-cell-topic b { color:#333 })
				// TODO: This poses an issue in subclasses of Grid now because Headers are now Components
				// therefore the id will be registered in the ComponentManager and conflict. Need a way to
				// add additional CSS classes to the rendered cells.
				text : "应用名称",
				dataIndex : 'title',
				flex : 1,
				// renderer: this.renderTopic,
				sortable : false
			}, {
				text : "AppKey_android",
				dataIndex : 'username',
				width : 150,
				hidden : false,
				sortable : true
			}, {
				text : "SecretKey_android",
				dataIndex : 'replycount',
				width : 150,
				align : 'right',
				sortable : true
			}, {
				text : "AppKey_ios",
				dataIndex : 'lastpost',
				width : 150,
				// renderer: this.renderLast,
				sortable : true
			}, {
				text : "SecretKey_ios",
				dataIndex : 'lastpost',
				width : 150,
				// renderer: this.renderLast,
				sortable : true
			}, {
				menuDisabled : true,
				text : "进入",
				sortable : false,
				xtype : 'actioncolumn',
				width : 50,
				items : [{
					iconCls : 'application-go',
					id : 'enter',
					tooltip : '进入',
					handler : 'onEnter'
				}]
			}],
			// inline buttons

			dockedItems : [{
				xtype : 'toolbar',
				items : [{
					xtype : 'textfield',
					fieldLabel : '应用标题',
					anchor : '-5',
					name : 'title'
				}, {
					text : '查询',
					id : 'btnQuery'

					// tooltip : 'Add a new row',
					// iconCls : 'add'
				}
				// , {
				// text : 'Add Something',
				// tooltip : 'Add a new row',
				// iconCls : 'add'
				// }, '-', {
				// text : 'Options',
				// tooltip : 'Set options',
				// iconCls : 'option'
				// }, '-', {
				// itemId : 'removeButton',
				// text : 'Remove Something',
				// tooltip : 'Remove the selected item',
				// iconCls : 'remove',
				// disabled : true
				// }
				]
			}],
			// paging bar on the bottom
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				// displayInfo: false,
				// displayMsg: 'Displaying topics {0} - {1} of {2}',
				// emptyMsg: "No topics to display",
				items : ['-'
				// , {
				// text: pluginExpanded ? 'Hide Preview' : 'Show Preview',
				// pressed: pluginExpanded,
				// enableToggle: true,
				// toggleHandler: function(btn, pressed) {
				// var preview = Ext.getCmp('gv').getPlugin('preview');
				// preview.toggleExpanded(pressed);
				// btn.setText(pressed ? 'Hide Preview' : 'Show Preview');
				// }
				// }
				]
			})
		});
		this.callParent();
	},
});
