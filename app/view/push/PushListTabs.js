/**
 * Demonstrates a default configuration of a tab panel.
 */
Ext.define('Push.view.push.PushListTabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'push-list-tabs',
    controller: 'push-list-tab-view',
    
    //<example>
    requires: [
        'Push.view.push.PushListTabController'
    ],
    otherContent: [{
        type: 'ViewController',
        path: 'app/view/push/TabController.js'
    }],
    exampleTitle: 'Basic Tabs',
    //</example>
    width: 1200,
    height: 700,
    defaults: {
        bodyPadding: 10,
        autoScroll: true
    },
    items: [{
    	    title: '即时推送',
    	xtype: 'push-list-grid'
    },{
        title: '定时推送',
        html: 'KitchenSink.DummyText.extraLongText'
    }],

    listeners: {
        scope: 'controller',
        tabchange: 'onTabChange'
    }
});