Ext.define('Chat.controller.MessageList',{
	extend: 'Ext.app.Controller',

	requires: [
		'Chat.ux.LoremIpsum'
	],

	config: {
		socket: null,
		config: null,
		scroller: null,
		maxPosition: 0,

		models: [
			'Config',
			'Message'
		],

		stores: [
			'Config',
			'Messages'
		],

		views: [
			'MessageList'
		],

		refs: {
			'message': 'input[name=message]'
		},

		control: {
			'messagelist': {
				initialize: function (list) {
					var me = this,
						scroller = list.getScrollable().getScroller();

					scroller.on('maxpositionchange', function (scroller, maxPos, opts) {
						me.setMaxPosition(maxPos.y);
					});

					me.setScroller(scroller);

					me.getMessage().setValue(Ext.create('Chat.ux.LoremIpsum').getSentence());
				}
			},

			'textfield#message': {
				action: 'sendMessage'
			},

			'button#send': {
				tap: 'sendMessage'
			}
		}
	},

	initSocketConnection: function () {
		var me = this,
			config = Ext.getStore('Config').getAt(0);

		Ext.getStore('Messages').removeAll();
		me.setConfig(config);

		if (!me.getSocket()) {
			var socket = io.connect(config.get('server'));
			me.setSocket(socket);
			socket.on('connect', Ext.Function.bind(me.registerUser, me));
			socket.on('message', Ext.Function.bind(me.addMessage, me));
		} else {
			me.registerUser();
		}
	},

	prepareMessage: function () {
		return {
			nickname: this.getConfig().get('nickname'),
			message: this.getMessage().getValue()
		}
	},

	registerUser: function () {
		this.getSocket().emit('register', {
			nickname: this.getConfig().get('nickname')
		});
	},

	sendMessage: function () {
		var message = this.prepareMessage();
		this.getSocket().emit('message', message);
		this.addMessage(Ext.apply({local: true}, message));
	},

	addMessage: function(message) {
		Ext.getStore('Messages').add(message);
		this.getMessage().setValue(Ext.create('Chat.ux.LoremIpsum').getSentence());

		if (this.getMaxPosition()) {
			this.getScroller().scrollToEnd(true);
		}
	}

});