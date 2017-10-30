define(function(require,exports,module) {
      exports.currTime = function(originTime){
                             if(originTime != Number){
                                    originTime = parseInt(originTime);
                             }
                             //到时候要用后台传过来的时间代替now
                             var now = new Date(originTime);
                             var year = now.getFullYear(),
                                 month = now.getMonth()+1,
                                 day = now.getDate() ;

                             var h = now.getHours(),
                                 m = now.getMinutes(),
                                 s = now.getSeconds();
                             
                             checkTime(m);
                             checkTime(s);

                             var time = year+'-'+month+'-'+day+' '+h+':'+m+':'+s;
                             
                             function checkTime(t){
                                 if(t<10){
                                   t = '0' + t ;
                                 }
                                 return t;
                             }
                            
                             return time;
     }
})