Ext.define('Push.view.user.MenuForm', {
	extend : 'Ext.window.Window',

	requires : ['Ext.form.Panel', 'Ext.button.Button', 'Ext.form.field.Text', 'Ext.form.field.ComboBox'],

	// viewModel : 'login',
// 
	// controller : 'login',
	bodyPadding : 10,
	title : '新增菜单项',
	closable : true,
	// modal : true, 	
	// cls : 'login',

	items : {
		xtype : 'form',
		reference : 'form',
		items : [{
			xtype : 'textfield',
			name : 'username',
			bind : '{username}',
			fieldLabel : '名称',
			allowBlank : false,
			enableKeyEvents : true,
			listeners : {
				specialKey : 'onSpecialKey'
			}
		}, {
			xtype : 'textfield',
			name : 'password',
			inputType : 'password',
			fieldLabel : 'URL',
			allowBlank : false,
			enableKeyEvents : true,
			cls : 'password',
			listeners : {
				specialKey : 'onSpecialKey'
			}
		}]
	},

	buttons : [{
		text : '创建',
		listeners : {
			click : 'onLoginClick'
		}
	}]
});
