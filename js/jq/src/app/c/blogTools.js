define(function(require, exports, module){

    exports._init = function(){
        // console.log(blogToos/_init);
    };
    exports.articleSort = function(details, field, order, cb){
        if(0 == details.length){
            cb([]);
        } else if(field.length > 0){
            if(order.toLowerCase() == 'desc'){
                details.sort(function(a, b){
                    return parseInt( b[field] ) - parseInt( a[field] );
                });
            } else {
                details.sort(function(a, b){
                    return parseInt( a[field] ) - parseInt( b[field] );
                });
            }
            cb(details || []);
        }
    }
    exports.articleCut = function(details, num, cb){
        if(0 == details.length || !num) {
            cb([]);
        } else {
            var arr = new Array();
            for(var i = 0, length = details.length; i < num && i < length; i++){
                arr.push(details[i]);
            }
            cb(arr || []);
        }

    }
    exports.timeToStr = function(details, cb){
        if(0 == details.length){
            cb([]);
        } else {
            var time = require("time");
            details.forEach(function(item){
                item.create_time = time.format('yyyy年mm月dd日', parseInt(item.create_time * 1000));
            });
            cb(details || []);
        }
    }
    exports.isStrCut = function(details, field, num, cb){
        if(0 == details.length){
            cb([]);
        } else {
            details.forEach(function(item){
                if(item[field].length > num){
                    item[field] = item[field].substr(0, num) + "...";
                }
            });
            cb(details || []);
        }
    }
    exports.getDetailsByField = function(details, field, value, cb){
        if(0 == details.length){
            cb([]);
        } else if(field.length || value.length){
            var arr = new Array();
            details.forEach(function(item){
                item[field] == value&&arr.push(item);
            });
            cb(arr);
        } else {
            cb(details);
        }
    }
    exports.getNavLeft = function(topicId, indexId){
        var service = require('../m/blog');
        var tpl = require('../v/tpl_blog');
        service.getTopicList(function (topicList) {
            // console.log(topicList);
            var arrNav = [];
            var title ="";
            topicList = topicList.sort(function (a, b) {
                return a.priority - b.priority;
            });
            if( topicId ){
                topicList.forEach(function(item){
                    var arrIndex = [];
                    if( item.id==topicId ) title = item.name;
                    if( item.pid==topicId )  {
                        arrIndex.push(item.id);
                        arrIndex.push(item.name);
                        arrNav.push(arrIndex);
                    }
                });
            }else{ 
                topicList.forEach(function(item){
                    if( item.id==indexId ) topicId=item.pid;
                });
                topicList.forEach(function(item){
                    var arrIndex = [];
                    if( item.id==topicId ) title = item.name;
                    if( item.pid==topicId )  {
                        arrIndex.push(item.id);
                        arrIndex.push(item.name);
                        arrNav.push(arrIndex);
                    }
                });
            }
            // console.log(arrNav);
            $(".navLeft").html(tpl.navLeft({title: title,indexDetail: arrNav}));
        });
    }
});