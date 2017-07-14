define(function(require, exports, module){

    var data = require('data');

    exports.getTopicList = function (cb) {
        var url = '/public/json/way.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data || []);
            }
            else {
                cb([]);
            }
        }, 1000);
    }
    exports.getUserList = function (cb) {
        var url = '/public/json/user.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data || []);
            }
            else {
                cb([]);
            }
        }, 1000);
    }
    exports.getDetails = function (cb) {
        var url = '/public/json/articleDetail.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data || []);
            }
            else {
                cb([]);
            }
        }, 2000);
    }
    exports.getDetailById = function(getId,cb){
        var url = '/public/json/articleDetail.json';
        data.query(url, function (resp) {
            
            if (resp.errCode === 200) {
                $.each(resp.data,function(k,v){
                     if(v.id==getId){
                         cb(v||[])
                     }
                })
              
            }else {
                cb([]);
            }
        }, 2000);
    }
});