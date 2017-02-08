define(function (require, exports, module) {
	// console.log(module);
	exports.abc = function(){
		

			var area = document.getElementById("gdong");
			var con1 = document.getElementById('con1');
			var con2 = document.getElementById('con2');
			var tup = document.getElementById('tup');
			var tdown = document.getElementById('tdown');
			con2.innerHTML = con1.innerHTML;
			var itheight = 40;
			area.scrollTop = 0;
			var set1;
			var speed = 50;
			var time2 = 6000;
			area.scrollTop = 0;
			var MyMar;

			function start(){
				clearInterval(MyMar);	
				clearTimeout(set1);
				area.scrollTop +=2;
				MyMar = setInterval(abcd, speed);
				clearInterval(MyMar-1);
			}

			function abcd(){
				
				if(area.scrollTop % itheight == 0){
					clearInterval(MyMar);
					setTimeout(start, time2);
				}else{
					area.scrollTop +=2;
					if (area.scrollTop >= con1.scrollHeight){
						area.scrollTop = 0;
					}
				}				
			}
			setTimeout(start, time2);
	        
	        tup.onclick = function() {
	        	clearInterval(MyMar);

	        	start();

	        	//瞬变效果
	        	/*setTimeout(function (){
	        		area.scrollTop = Math.floor((area.scrollTop / itheight + 1))*itheight;
	        	},1);*/
	        }

	        tdown.onclick = function() {
	        	clearTimeout(set1);clearInterval(q);clearInterval(q - 1);
	        	clearInterval(MyMar - 1);
	        	clearInterval(MyMar);
	        	var dh = area.scrollTop;
	        	var downh;
	        	if (dh == 0) {
	        		area.scrollTop = con1.scrollHeight;
	        	}
	        	if (dh % itheight == 0 || dh == 0) {
	        		
	        		downh = itheight;
		        	}else{
		        		downh = dh % itheight;
	        	}
	        	function dp(){
	        		area.scrollTop -=3.9;	
	        	}
	        	var q = setInterval(dp, 60);
	        	setTimeout(function (){clearInterval(q);clearInterval(q - 1);}, downh*16);
	        	console.log(downh);
	        	set1 = setTimeout(start, 7000);

	        	//start();

	        	//瞬变效果
	        	/*var height = Math.ceil(((area.scrollTop - itheight) / itheight))*itheight;
	        	if (height) {
	        		area.scrollTop = height;
	        	}else{
	        		area.scrollTop = con1.scrollHeight;
	        	}*/
	        }
		}
	
})