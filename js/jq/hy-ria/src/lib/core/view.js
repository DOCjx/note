/**
 * View Module
 * Created by Homkai on 2015/8/8.
 */ 
define(function(require, exports, module){

    var event = require('event');
    var route = require('route');


    exports.init = function(){
        // 快速路由
        event.onG('click', '[data-go-route]', function(e){
            var rule = $.trim($(this).data('go-route'));
            // console.log($(this).data());
            if(!rule) return;
            route.go(rule);
        });
        // 相同module/action时，参数不同会reload
        event.onG('click', '[data-go-route-reload]', function(e){
            var rule = $.trim($(this).data('go-route-reload'));
          //  console.log(rule);
            if(!rule) return;
            route.go(rule, {reload: true});
        });
        // 快速跳转URL
        event.onG('click', '[data-go-url]', function(e){
            var url = $.trim($(this).data('go-url'));
            if(!url) return;
            setTimeout(function(){
                location.href = url;
            }, 10);
        });
        // 触发module事件
        event.onG('click', '[data-trigger]', function(e){
            var reg = $.trim($(this).data('trigger'));
            if(!reg) return;
            event.trigger(reg, [$(this)]);
        });

        // 触发global事件
        event.onG('click', '[data-trigger-g]', function(){
            var reg = $.trim($(this).data('trigger-g'));
            if(!reg) return;
            event.triggerG(reg, [$(this)]);
        });

        event.onG('mouseenter','[data-go-part-reload]','data-id',function(){
            var rule = $.trim($(this).data('go-part-reload'));
            if(!rule) return;
            console.log(rule);
            route.go(rule,{reload: true});
            var dataId = $.trim($(this).data('id'));
            var list = document.getElementsByClassName('item');
            for(var i=0; i<list.length; i++){
                var listId = list[i].getAttribute("id");
                var change = document.getElementById(listId);
                var changeFont = change.getElementsByTagName("a");
                //  console.log(changeFont);
                if(listId != dataId){
                    change.style.backgroundColor = "transparent";
                    //changeFont.style.color = "#fff";
                    for(var s=0; s<changeFont.length; s++){
                        changeFont[s].style.color = "#fff";
                    }
                }else {
                    change.style.backgroundColor = "#fff";
                    for(var j=0; j<changeFont.length; j++){
                        changeFont[j].style.color = "#000";
                    }
                }
            }
        });

        event.onG('mouseleave','.catedialog ',function(){
            function yan(){
                $('.item').css("background","transparent");
                var list = document.getElementsByClassName('item');
                for(var i=0; i<list.length; i++){
                    var listId = list[i].getAttribute("id");
                    var change = document.getElementById(listId);
                    var changeFont = change.getElementsByTagName("a");
                    // console.log(changeFont);
                    for(var s=0; s<changeFont.length; s++){
                        changeFont[s].style.color = "#fff";
                    }
                }
            }
            setTimeout(yan,300);
        });

    }

});