Ext.define('Chat.model.Config', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'nickname',
				type: 'string'
			}, {
				name: 'server',
				type: 'string'
			}
		],

		proxy: {
			type: 'localstorage',
			id: 'chat-config'
		}
	}
});