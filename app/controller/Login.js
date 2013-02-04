Ext.define('Chat.controller.Login', {
	extend: 'Ext.app.Controller',

	requires: [
		'Chat.ux.Names'
	],

	config: {
		refs: {
			main: 'main',
			loginForm: 'login',
			nicknameField: 'textfield[name=nickname]'
		},

		control: {
			'login': {
				scope: this,

				show: function () {
					var n = Ext.create('Chat.ux.Names');
					this.getNicknameField().setValue(n.random());
				}
			},

			'login #start': {
				tap: 'startChat'
			}
		}
	},

	startChat: function () {
		var config = Ext.getStore('Config');

		if (config.getAllCount() === 0) {
			config.add(this.getLoginForm().getValues());
		} else {
			config.getAt(0).setData(this.getLoginForm().getValues());
		}

		this.getMain().push(Ext.create('Chat.view.MessageList'));
		this.getApplication().getController('MessageList').initSocketConnection();
	}
});

// Ver: ?.?