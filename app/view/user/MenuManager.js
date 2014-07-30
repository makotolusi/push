/**
 * This example demonstrates several grid plugins.
 */
Ext.define('Push.view.user.MenuManager', {
	extend : 'Ext.panel.Panel',

	requires : ['Ext.grid.Panel', 'Ext.grid.column.Number', 'Ext.grid.column.Date', 'Ext.grid.column.Boolean', 'Ext.grid.View', 'Ext.selection.CheckboxModel', 'Push.model.grid.Financial'],

	xtype : 'menu-manager',

	bodyStyle : 'background-color:transparent',
	//<example>
	exampleTitle : '菜单项管理',
	otherContent : [{
		type : 'Model',
		path : 'app/model/grid/Financial.js'
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

	statics : {

		hasDescriptions : false,

		dummyData : [[0, '3m Co', 71.72, 0.02, 0.03, '9/1 12:00am', 'Manufacturing'], [1, 'Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am', 'Manufacturing'], [2, 'Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am', 'Manufacturing']],
		// , [3, 'American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am', 'Finance'], [4, 'American International Group, Inc.', 64.13, 0.31, 0.49, '9/1 12:00am', 'Services'], [5, 'AT&T Inc.', 31.61, -0.48, -1.54, '9/1 12:00am', 'Services'], [6, 'Boeing Co.', 75.43, 0.53, 0.71, '9/1 12:00am', 'Manufacturing'], [7, 'Caterpillar Inc.', 67.27, 0.92, 1.39, '9/1 12:00am', 'Services'], [8, 'Citigroup, Inc.', 49.37, 0.02, 0.04, '9/1 12:00am', 'Finance'], [9, 'E.I. du Pont de Nemours and Company', 40.48, 0.51, 1.28, '9/1 12:00am', 'Manufacturing'], [10, 'Exxon Mobil Corp', 68.1, -0.43, -0.64, '9/1 12:00am', 'Manufacturing'], [11, 'General Electric Company', 34.14, -0.08, -0.23, '9/1 12:00am', 'Manufacturing'], [12, 'General Motors Corporation', 30.27, 1.09, 3.74, '9/1 12:00am', 'Automotive'], [13, 'Hewlett-Packard Co.', 36.53, -0.03, -0.08, '9/1 12:00am', 'Computer'], [14, 'Honeywell Intl Inc', 38.77, 0.05, 0.13, '9/1 12:00am', 'Manufacturing'], [15, 'Intel Corporation', 19.88, 0.31, 1.58, '9/1 12:00am', 'Computer'], [16, 'International Business Machines', 81.41, 0.44, 0.54, '9/1 12:00am', 'Computer'], [17, 'Johnson & Johnson', 64.72, 0.06, 0.09, '9/1 12:00am', 'Medical'], [18, 'JP Morgan & Chase & Co', 45.73, 0.07, 0.15, '9/1 12:00am', 'Finance'], [19, 'McDonald\'s Corporation', 36.76, 0.86, 2.40, '9/1 12:00am', 'Food'], [20, 'Merck & Co., Inc.', 40.96, 0.41, 1.01, '9/1 12:00am', 'Medical'], [21, 'Microsoft Corporation', 25.84, 0.14, 0.54, '9/1 12:00am', 'Computer'], [22, 'Pfizer Inc', 27.96, 0.4, 1.45, '9/1 12:00am', 'Medical'], [23, 'The Coca-Cola Company', 45.07, 0.26, 0.58, '9/1 12:00am', 'Food'], [24, 'The Home Depot, Inc.', 34.64, 0.35, 1.02, '9/1 12:00am', 'Retail'], [25, 'The Procter & Gamble Company', 61.91, 0.01, 0.02, '9/1 12:00am', 'Manufacturing'], [26, 'United Technologies Corporation', 63.26, 0.55, 0.88, '9/1 12:00am', 'Computer'], [27, 'Verizon Communications', 35.57, 0.39, 1.11, '9/1 12:00am', 'Services'], [28, 'Wal-Mart Stores, Inc.', 45.45, 0.73, 1.63, '9/1 12:00am', 'Retail'], [29, 'Walt Disney Company (The) (Holding Company)', 29.89, 0.24, 0.81, '9/1 12:00am', 'Services']],

		getDummyData : function() {
			if (!this.hasDescriptions) {
				// add in some dummy descriptions
				for (var i = 0; i < this.dummyData.length; i++) {
					this.dummyData[i].push('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. ');
				}
				this.hasDescriptions = true;
			}
			return this.dummyData;
		},

		getLocalStore : function() {
			return Ext.create('Ext.data.ArrayStore', {
				model : 'Push.model.grid.Financial',
				data : this.getDummyData()
			});
		}
	},

	height : 1400,
	width : 1000,

	initComponent : function() {
		var me = this;

		me.width = me.themeInfo.width;

		Ext.applyIf(me, {
			defaults : {
				margin : '0 0 10 0'
			},
			items : [ {
					xtype : 'toolbar',
					items : ['->',{
						text : '新增菜单项',
						iconCls : 'add',
						handler:function(){
							   	var win=Ext.create('Push.view.user.MenuForm');
						   	win.show();
						}
					}]
				},{
				xtype : 'gridpanel',
				itemId : 'grid4',
				scroll :false,
				store : me.statics().getLocalStore(),
				columns : [{
					text : "名称",
					flex : 1,
					dataIndex : 'company'
				}, {
					text : "地址",
					formatter : 'usMoney',
					dataIndex : 'price'
				}, {
					text : "操作",
					dataIndex : 'change'
				}],
				columnLines : true,
				selModel : Ext.create('Ext.selection.CheckboxModel', {
					listeners : {
						selectionchange : function(sm, selections) {
							var grid4 = Ext.ComponentQuery.query( 'grid-plugins gridpanel#grid4' )[0];
							grid4.down('#removeButton').setDisabled(selections.length === 0);
						}
					}
				}),

				// inline buttons
				dockedItems : [ {
					xtype : 'toolbar',
					items : [{
						text : '新增',
						iconCls : 'add'
					}, '-', {
						text : '修改',
						iconCls : 'option'
					}, '-', {
						itemId : 'removeButton',
						text : '删除',
						iconCls : 'remove',
					},'-', {
						itemId : 'hideButton',
						text : '隐藏',
						iconCls : 'remove',
					}
					]
				}],

				// frame : true,
				title : '个人设置',
				iconCls : 'icon-grid'
			}]
		});

		me.callParent(arguments);
	}
}); 