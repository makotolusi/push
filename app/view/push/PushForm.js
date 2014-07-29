Ext.define('Push.view.push.PushForm', {
	extend : 'Ext.window.Window',
	xtype : 'push-from',
	alise : 'widget.push-from',
	requires : ['Ext.form.field.*'],
	title : '创建推送',
	frame : true,
	width : 650,
	bodyPadding : 10,
	fieldDefaults : {
		labelWidth : 120
	},
	otherContent : [{
		type : 'Store',
		path : 'app/store/States.js'
	}, {
		type : 'Model',
		path : 'app/model/State.js'
	}],
	items : {
		xtype : 'form',
		reference : 'form',
		items : [{
			xtype : 'fieldset',
			style : {
				position : 'inherit'
			},
			width : 620,
			title : '基本信息',
			defaultType : 'checkbox', // each item will be a checkbox
			layout : 'anchor',
			items : [{
				xtype : 'textfield',
				width : 400,
				name : 'textfield1',
				fieldLabel : '推送标题'
			}, {
				xtype : 'textareafield',
				width : 400,
				height : 100,
				name : 'textarea1',
				fieldLabel : '推送内容'
			}, {
				xtype : 'checkboxgroup',
				fieldLabel : '客户端',
				cls : 'x-check-group-alt',
				// Specify exact column widths (could also include float values for %)
				columns : [100, 100],
				vertical : true,
				items : [{
					boxLabel : 'Item 1',
					name : 'cb-custwidth',
					inputValue : 1
				}, {
					boxLabel : 'Item 2',
					name : 'cb-custwidth',
					inputValue : 2,
					checked : true
				}]
			}, {
				xtype : 'radiogroup',
				fieldLabel : '推送方式',
				cls : 'x-check-group-alt',
				columns : [100, 100, 100, 100, 100],
				vertical : true,
				items : [{
					boxLabel : 'Item 1',
					name : 'rb-custwidth1',
					checked : true,
					inputValue : 1
				}, {
					boxLabel : 'Item 2',
					name : 'rb-custwidth1',
					inputValue : 2,
					handler : function(box, checked) {
						var timmingField = Ext.getCmp('timmingField');
						timmingField.el.animate({
							opacity : checked ? 1 : 0.3
						});
					}
				}]
			}, {
				xtype : 'datefield',
				name : 'date1',
				id : 'timmingField',
				style : 'opacity:.3',
				disabled : true,
				fieldLabel : '定时时间'
			}]
		}, {
			xtype : 'fieldset',
			style : {
				position : 'inherit'
			},
			width : 620,
			title : '推送内容',
			defaultType : 'checkbox', // each item will be a checkbox
			layout : 'anchor',
			items : [{
				xtype : 'fieldcontainer',
				layout : 'hbox',
				combineErrors : true,
				defaultType : 'textfield',
				defaults : {
					hideLabel : 'true'
				},
				items : [{
					name : '内容类型',
					xtype : 'combobox',
					width : 200,
					displayField : 'state',
					store : {
						type : 'states'
					},

					minChars : 0,
					queryMode : 'local',
					typeAhead : true
				}, {
					name : '内容来源',
					xtype : 'combobox',
					width : 200,
					displayField : 'state2',
					store : {
						type : 'states'
					},

					minChars : 0,
					queryMode : 'local',
					typeAhead : true
				}]
			}, {
				xtype : 'textfield',
				width : 400,
				name : 'textfield1',
				fieldLabel : '推送标题'
			}]
		}, {
			/*====================================================================
			* RadioGroup examples
			*====================================================================*/
			// NOTE: These radio examples use the exact same options as the checkbox ones
			// above, so the comments will not be repeated.  Please see comments above for
			// additional explanation on some config options.
			xtype : 'fieldset',
			title : '用户群',
			style : {
				position : 'inherit'
			},
			width : 620,
			// in this section we use the form layout that will aggregate all of the fields
			// into a single table, rather than one table per field.
			layout : 'anchor',
			collapsible : true,
			defaults : {
				anchor : '100%'
			},
			items : [{
				xtype : 'radiogroup',
				fieldLabel : '标签类型',
				cls : 'x-check-group-alt',
				columns : [100, 100, 100, 100, 100],
				vertical : true,
				items : [{
					boxLabel : 'Item 1',
					name : 'rb-custwidth',
					inputValue : 1
				}, {
					boxLabel : 'Item 2',
					name : 'rb-custwidth',
					inputValue : 2,
					checked : true
				}, {
					boxLabel : 'Item 3',
					name : 'rb-custwidth',
					inputValue : 3
				}, {
					boxLabel : 'Item 4',
					name : 'rb-custwidth',
					inputValue : 4
				}, {
					boxLabel : 'Item 5',
					name : 'rb-custwidth',
					inputValue : 5
				}, {
					boxLabel : 'Item 5',
					name : 'rb-custwidth',
					inputValue : 5
				}, {
					boxLabel : 'Item 5',
					name : 'rb-custwidth',
					inputValue : 5
				}, {
					boxLabel : 'Item 5',
					name : 'rb-custwidth',
					inputValue : 5
				}, {
					boxLabel : 'Item 5',
					name : 'rb-custwidth',
					inputValue : 5
				}]
			}, {
				xtype : 'tagfield',
				fieldLabel : '标签',
				store : {
					type : 'states'
				},
				reference : 'states',
				displayField : 'state',
				valueField : 'abbr',
				filterPickList : true,
				queryMode : 'local',
				publishes : 'value'
			}]
		}]
	},

	buttons : [{
		text : 'Login',
		listeners : {
			click : 'onLoginClick'
		}
	}]
});
