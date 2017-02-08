seajs.config({
    base: '/app',
    paths:{
        _core: '/lib/core/',
    }, 
    alias: {
        jquery: '/vendor/jquery-2.2.0/jquery.min.js',
        bootstrapJs: '/vendor/bootstrap-3.3.6/js/bootstrap.min.js',
        hy: '_core/hy.js?v=201601282344',
        url: '_core/url.js?v=201601282344',
        event: '_core/event.js?v=201601282344',
        route: '_core/route.js?v=201601282344',
        time: '_core/time.js?v=201601282344',
        cache: '_core/cache.js?v=201601282344',
        data: '_core/data.js?v=201601282344',
        msg: '/app/_base/msg.js?v=201602051911'
    }
});