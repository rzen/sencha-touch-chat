Ext.define('Chat.view.MessageList', {
	extend: 'Ext.List',

	xtype: 'messagelist',
	
	config: {
		disableSelection: true,
		title: 'Chat',
		store: 'Messages',
		itemTpl : new Ext.XTemplate(
			'<tpl if="local">',
			'	<div class="local">',
			'<tpl else>',
			'	<div class="remote">',
			'</tpl>',
			'	<p class="nickname">{nickname}</p>',
			'	<p class="message">{message}</p>',
			'</div>'
		),
		items: [{
			xtype: 'toolbar',
			docked: 'bottom',
			items: [
				{
					xtype: 'textareafield',
					height: 60,
					flex: 5,
					name: 'message'
				}, {
					xtype: 'button',
					itemId: 'send',
					ui: 'action',
					flex: 1,
					text: 'Send'
				}
			]
		}]
	}
});