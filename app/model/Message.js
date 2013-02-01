Ext.define('Chat.model.Message', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'local',
				type: 'boolean'
			}, {
				name: 'nickname',
				type: 'string'
			}, {
				name: 'message',
				type: 'string'
			}
		]
	}
});