

$(document).ready(function(){
	define(function (require, exports, module) {
    exports.message = function(){
        $("html,body").animate({
              scrollTop:0
         },0)
    	//监听滚动条
    	$(window).scroll(function(){
            var targetTop = $(this).scrollTop();
            // console.log(targetTop)
            // console.log("44444")
            if (targetTop >= 450){
                $("#righttop").addClass("righttop");
            }else{
                $("#righttop").removeClass("righttop");
            }

        });




	

		 //页内跳转事件
	
		var rNav_active = $(".active");
        var rNav_scroll = function(target){
            rNav_active.removeClass	("active");
            target.parent().addClass("active");
            rNav_active = target.parent();
        };
        $(".jieshao a").click(function(){
            rNav_scroll($(this));
            var target = $(this).attr("href");
            var targetScroll = $(target).offset().top-80;
            $("html,body").animate({scrollTop:targetScroll},300);
            return false;
        });
   



		//介绍目录点击事件
		$("#names").css("border-left","2px solid #563d7c");
		$("#names").click(function(event) {
			$("#allmembers").hide();
			$("#members").css("border-left","0px");
			if ($("#messageId").css("display") == "none") {
					$("#messageId").css({
					display: 'block'
				});

		}	else{
			$("#messageId").css({
					display: 'none'
				});
		}
		});	

		//更多成员点击事件
		
		 $("#members").click(function() {
	 	if ($("#allmembers").css("display") == "none") {
					$("#allmembers").css({
					display: 'block'
				});

		}	else{
			$("#allmembers").css({
					display: 'none'
				});
		}
	 	
	 		$("#messageId").hide();
	 		$("#names").css("border-left","0px");

	 });



		//点击出现边框事件

		  	$("#righttop a").click(function(e){
				// e = window.event || e;
				// var obj = e.srcElement || e.target;
					$("#righttop a").attr("class","");
					// console.log($(".navSide li a").attr("class",""));
					// console.log($(this))
					var objDom = $(this).parent().children(":first");
					 // console.log(objDom)
					var objParent = $(this).parent().parent().parent().parent().children(":first");
					  // console.log(objParent)
				 	objDom.attr("class","actived");
				 	 // console.log("2333")
					if(objParent.attr("class")=="block" || objParent.attr("class")=="grade" ){
						// console.log($(objParent1));
						objParent.attr("class","");
					}else{
						objParent.attr("class","actived");
						objParent.css("font-weight","bold");
					}
			})




 	//点击年级事件
		 $(".grade a").click(function() {
	 	var div =$(this).attr('id');
	 	// console.log(div)
	 	 $(div).toggle(300)
	 	 var opother=$(div).parent().parent().parent().children().children().children("ul").not(div);
	 	 // console.log(opother);
	 	 // console.log("4444");
	 	 if ($(div).css("display") == "block") {
	 	 	$(opother).hide(300);
	 	 }
	 // 	  $(".grade").mouseleave(function() {
	 // 	 $(div).hide(300)
	 // });
	 	   });
	}
	})
})





