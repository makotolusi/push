Ext.define('Push.view.user.MenuForm', {
	extend : 'Ext.window.Window',

	requires : ['Ext.form.Panel', 'Ext.button.Button', 'Ext.form.field.Text', 'Ext.form.field.ComboBox'],

	id:'menu-add-window',
	bodyPadding : 10,
	title : '新增菜单项',
	closable : true,
	// modal : true,
	// cls : 'login',

	items : {
		xtype : 'form',
		reference : 'form',
		id : 'menu-add-form',
		items : [{
			xtype : 'textfield',
			name : 'name',
			fieldLabel : '名称',
			allowBlank : false
		}, {
			xtype : 'textfield',
			name : 'url',
			fieldLabel : 'URL'
		}]
	},

	buttons : [{
		text : '创建',
		handler : function() {
			var form = Ext.getCmp('menu-add-form');
			var win = Ext.getCmp('menu-add-window');
			var formValue=form.getValues();
			if(win.url=='/web/operation/create'){
				formValue.manageItem={};
				formValue.manageItem.id='53db4d14596caa9eb54e007e';
			}
			if (form.isValid()) {
				Ext.Ajax.request({
					url : uri + win.url,
					method : 'POST',
					headers : {
						'Content-Type' : 'application/json; charset=utf-8'
					},
					jsonData : formValue,
					success : function(response) {
						var text = response.responseText;
						console.log(text);
						Ext.MessageBox.alert('提示', '创建成功', function(){
								win.close();
						}, this);
					
					},
					failure : function(response) {
						var text = response.responseText;
						console.log(text);
						Ext.MessageBox.alert('提示', '创建失败-'+text,  function(){
								win.close();
						}, this);
					}
				});
			}
		}
	}]

});
