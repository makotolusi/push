Ext.define('Push.store.ContentType', {
    extend: 'Ext.data.Store',

    alias: 'store.contenttype',
    model: 'Push.model.ContentType',
   autoLoad: {},
    pageSize: 50,
    remoteSort: true,
     proxy: {
        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        type: 'jsonp',
        url: 'http://www.sencha.com/forum/topics-browse-remote.php',
        reader: {
            rootProperty: 'topics',
            totalProperty: 'totalCount'
        },
        // sends single sort as multi parameter
        simpleSortMode: true,
    },
    sorters: [{
        property: 'lastpost',
        direction: 'DESC'
    }]
});
