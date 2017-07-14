define(function (require, exports, module) {
	exports._init = function(){
		$(function(){
		  	$(document).click(function(e){
				e = window.event || e;
				var obj = e.srcElement || e.target;
				var case1 = $(obj).parent().parent().parent().parent().is(".navSide");
				var case2 = $(obj).parent().parent().is(".navSide");

				if( case1||case2 ) {
					$(".navSide ul").css("display","none");
					$(".navSide ul").prev().css("font-weight","normal");
					if( case1 ) {
						$(obj).parent().parent().css("display","block");
						$(obj).css("font-weight","normal");
					}
					if( case2 ) {
						$(obj).next().css("display","block");
						$(obj).css("font-weight","bold");
					}
					
					$(".navSide li a").attr("class","");
					// console.log($(".navSide li a").attr("class",""));
					
					var objDom = $(obj).parent().children(":first");
					var objParent = $(obj).parent().parent().parent().children(":first");
					
					objDom.attr("class","active");
					if( !objParent.is(".nav") ){
						// console.log($(objParent1));
						objParent.attr("class","active");
						objParent.css("font-weight","bold");
					} 
					if( case1 ) $(window).scrollTop(430);
				}
			});
		})
	}
})