Ext.define('Chat.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Chat.view.Login',
        'Chat.view.MessageList'
    ],
    config: {
        // layout: 'card',
        items: [
            {
                xtype: 'login'
            }
        ]
    }
});
