define(function (require,exports,module){
	var h1 = "319px";
	var h2 = "638px";
	var h3 = "957px";
	exports.main = function() {
		$(document).ready(function(){			
			$('.item1').on('click',function(){
				$('.art-content').animate({bottom:'0'},100,function(event){	

				})
				$('.art-content-hidden1').animate({bottom:'0'},100,function(event){	

				})
				$('.art-content-hidden2').animate({bottom:h1},100,function(event){	

				})
				$('.art-content-hidden3').animate({bottom:h2},100,function(event){	

				})
				var active = $(this).parent().hasClass('active');
				if(active){
		
				}else{
					$('.item1').parent().addClass('active');
					$('.item2,.item3,.item4').parent().removeClass('active');
					$(this).siblings().children('a').removeClass('font-active');
					$(this).children('a').addClass('font-active');
					$('.art-menu .item1').addClass('border-active');
					$('.art-menu .item1').siblings().removeClass('border-active');
				}			
			})
			$('.item2').on('click',function(){

				$(this).children('a').addClass('font-active');
				
				$('.item1').children('a').removeClass('font-active');
				$('.art-content').animate({bottom:h1},100,function(event){  
				
				});
				$('.art-content-hidden1').animate({bottom:h1},100,function(event){	

				})
				$('.art-content-hidden2').animate({bottom:h1},100,function(event){	

				})
				$('.art-content-hidden3').animate({bottom:h2},100,function(event){	

				})
				var active = $(this).parent().hasClass('active');
				if(active){
					
				}else{
					$('.item2').parent().addClass('active');
					$('.item1,.item3,.item4').parent().removeClass('active');
					$(this).siblings().children('a').removeClass('font-active');
					$(this).children('a').addClass('font-active');
					$('.art-menu .item2').addClass('border-active');
					$('.art-menu .item2').siblings().removeClass('border-active');
				}
			

			})
			$('.item3').on('click',function(){

				$('.art-content-hidden2').animate({bottom:h2},100,function(event){
      
				})
				$('.art-content').animate({bottom:h1},100,function(event){
					
				})

				$('.art-content-hidden1').animate({bottom:h2},100,function(event){

				})
				$('.art-content-hidden3').animate({bottom:h2},100,function(event){

				})
				var active = $(this).parent().hasClass('active');
				if(active){
				
				}else{
					$('.item3').parent().addClass('active');
					$('.item1,.item2,.item4').parent().removeClass('active');
					$(this).siblings().children('a').removeClass('font-active');
					$(this).children('a').addClass('font-active');
					$('.art-menu .item3').addClass('border-active');
					$('.art-menu .item3').siblings().removeClass('border-active');
				}
				
			})
		    $('.item4').on('click',function(){
				$('.art-content').animate({bottom:h1},100,function(event){
					
				})
				$('.art-content-hidden1').animate({bottom:h2},100,function(event){

				})
				$('.art-content-hidden2').animate({bottom:h3},100,function(event){
				  
				})
				$('.art-content-hidden3').animate({bottom:h3},100,function(event){
				   
		        })
			     var active = $(this).parent().hasClass('active');
			     if(active){
			     
			     }else{
			     	$('.item4').parent().addClass('active');
			     	$('.item1,.item2,.item3').parent().removeClass('active');
			     	$(this).siblings().children('a').removeClass('font-active');
			     	$(this).children('a').addClass('font-active');
			     	$('.art-menu .item4').addClass('border-active');
			     	$('.art-menu .item4').siblings().removeClass('border-active');

			     }	
			
	})
		})
	}


})