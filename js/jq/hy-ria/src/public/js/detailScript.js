define(function(require,exports,module){
    // var blog = require('m/blog');
    var route = require('route');
    exports.detailInit =function (){
          $(function(){
              (function($){
                      var comInput = $("#comment_input");
                      var comArea = $("#com_area");   

                      $("html,body").animate({
                            scrollTop:0
                          },30)
                     
                      initial();
                     
                      function initial(){
                          commentExtend();
                          showComment();
                          // ajaxGetMes();
                        
                      }
                      
                      function checkMobile(){
                            var isMobile = false;
                            // console.log(isMobile);
                            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) 
                            { 　　
                              isMobile = true; 
                            }

                            return isMobile;
                         
                      }
                      function commentExtend(){
                                
                              var exComment= $(".ex_comment");
                              var delBtn = $(".del_btn");
                              console.log(delBtn)
                              comInput.focus(function(){      
                                 exComment.addClass("open_comment");            
                              })
                            
                              delBtn.click(function(){
                                 exComment.removeClass("open_comment"); 
                              })
                      }

                      function showComment(){
                            
                             var comBtn = $("#comment .com_btn");
                             var comMenu = $(".com_menu");

                             var form = $(".form form");
                             var createTime = (new Date()).getTime();
                             var time = showTime(createTime);
                             // console.log(time);
                             var pattern = /\S/;
                             
                            
                             comBtn.click(function(){
                              var comment = comInput.val();
                                            // console.log(comInput.val());
                                            
                                            if(!pattern.test(comment)){
                                              return;
                                            }

                                            var li = "<li> <div class='com_area_person'>  <a href='#'><img class='head_img' src='/public/images/head_img.jpg'></a><div class='mes'><div class='name'>游客</div><div class='content'>"+comment+"</div><div class='time timeago' title='"+time+"'></div></div></div></li>"
                                            $(li).prependTo(comMenu);
                                            
                                            comInput.val(" ");
                                            $(".timeago").timeago(); 
                                          
                                            /*------可能会删掉--------*/
                                            var comAreaH = comArea.height();
                                            comArea.height(comAreaH+90)
                                         
                              });
                      }

                      function ajaxGetMes(){
                           var dataUrl = "/public/json/detail.json";
                          
                           $.getJSON(dataUrl,function(data){
                                 
                                  var num_entries;
                                  var person = [];
                                  
                                  $.each(data,function(k,v){
                                       if(k=="person"){
                                        num_entries = v.length;
                                         // console.log(num_entries);
                                        $.each(v,function(k1,v1){
                                           person.push(v1);
                                        })
                                       }
                                  })  
                                  // console.log(person)
                                  // console.log(person[1].id)
                                  //根据时间排序
                                  person.sort(function(a,b){
                                        return (b.time - a.time);
                                  }) 

                                  // console.log(person)
                                  $("#Pagination").pagination(num_entries, {
                                        num_edge_entries: 1, //边缘页数
                                        num_display_entries: 4, //主体页数      
                                        prev_text: "上一页",
                                        next_text: "下一页",
                                        items_per_page:3,
                                        callback: function(page_index, jq){                                     
                                               addItem(page_index,num_entries,person);
                                               return false;
                                        }
                                  });                     
                           })
                      }

                      function addItem(page_index,num_entries,person){
                                
                                var items_per_page = 3;
                                var new_content ;
                                var max_elem = Math.min((page_index+1)*items_per_page,num_entries);
                                var li,comArea,img,mes,name,content,time,subMes;
                                var comMenu = $(".com_menu");
                                var originTime;
                                comMenu.empty();

                                for(var i=page_index*items_per_page;i<max_elem;i++){
                                          //console.log(person[i].time)                                                    
                                          // 在json文件中图片的路径是相对JS而言的
                                          originTime = showTime(person[i].time);
                                          // console.log(person[i].time);
                                          img = "<a href='#'><img class='head_img' src='"+person[i].img+"'/></a>";                          
                                          name = "<div class='name'>"+person[i].name+"</div>";
                                          content = "<div class='content'>"+person[i].content+"</div>";
                                          time = "<div class='time timeago' title='"+originTime+"'></div>";                  
                                          
                                          // console.log($(mes).append(subMes));
                                          mes = "<div class='mes'>"+name + content + time +"</div>";
                                          comArea = "<div class='com_area_person'>"+ img + mes +"</div>";
                                         
                                          li = "<li>"+comArea+"</li>";
                                         
                                          comMenu.append(li); 
                                          $(".timeago").timeago(); 
                                }
                      }
                      
                      function showTime(originTime){
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

              })(jQuery)
             
             
          })
    }
    
  
})