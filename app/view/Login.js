Ext.define('Chat.view.Login', {
	extend: 'Ext.form.Panel',

	xtype: 'login',

	requires: [
		'Ext.form.FieldSet', 
		'Ext.field.Text', 
		'Ext.field.Email'
	],

	config: {
		title: 'Login',
		disableSelection: true,
		items: [{
			xtype: 'fieldset',
			title: 'User',
			instructions: 'Chat Demo.',
			items: [{
				xtype: 'textfield',
				name: 'nickname',
				label: 'Nickname'
			}, {
				xtype: 'textfield',
				name: 'server',
				label: 'Server',
				value: 'http://localhost:3333'
			}]
		}, {
			items: {
				xtype: 'button',
				centered: true,
				ui: 'round confirm',
				text: 'Start Chat',
				itemId: 'start',
				width: '50%'
			}
		}]
	}
});