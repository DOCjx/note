window.onload = function(){
	mv.app.toBanner();
	mv.ui.changeScene();
	mv.ui.mouseO();
	mv.app.outText();
	mv.ui.changeScene2();
};

var mv = {};

mv.tools = {};
mv.tools.getByClass = function(oParent,sClass){
	var aEle = oParent.getElementsByTagName('*');
	var arr = [];

	for(var i=0;i<aEle.length;i++){
		if( aEle[i].className==sClass ){
			arr.push(aEle[i]);
		}
	}
	return arr;
}; 
mv.tools.getStyle = function(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj,false)[attr];
	}
};

mv.ui = {};

mv.ui.mouseO = function(){
	document.getElementById('la1').onmouseover = document.getElementById('b1').onmouseover = function(){
		document.getElementById('b1').style.display='block';
		document.getElementById('dotC').style.display='block';
		document.getElementById('dotC').style.top = '370px';
		document.getElementById('dotC').style.left = '580px';
	};
	document.getElementById('la1').onmouseout = document.getElementById('b1').onmouseout = function(){
		document.getElementById('b1').style.display='none';
		document.getElementById('dotC').style.display='none';
	};
	document.getElementById('la2').onmouseover = document.getElementById('b2').onmouseover = function(){
		document.getElementById('b2').style.display='block';
		document.getElementById('dotC').style.display='block';
		document.getElementById('dotC').style.top = '440px';
		document.getElementById('dotC').style.left = '500px';
	};
	document.getElementById('la2').onmouseout = document.getElementById('b2').onmouseout = function(){
		document.getElementById('b2').style.display='none';
		document.getElementById('dotC').style.display='none';
	};
	document.getElementById('la3').onmouseover = document.getElementById('b3').onmouseover = function(){
		document.getElementById('b3').style.display='block';
		document.getElementById('dotC').style.display='block';
		document.getElementById('dotC').style.top = '415px';
		document.getElementById('dotC').style.left = '380px';
	};
	document.getElementById('la3').onmouseout = document.getElementById('b3').onmouseout = function(){
		document.getElementById('b3').style.display='none';
		document.getElementById('dotC').style.display='none';
	};
	document.getElementById('la4').onmouseover = document.getElementById('b4').onmouseover = function(){
		document.getElementById('b4').style.display='block';
		document.getElementById('dotC').style.display='block';
		document.getElementById('dotC').style.top = '450px';
		document.getElementById('dotC').style.left = '520px';
	};
	document.getElementById('la4').onmouseout = document.getElementById('b4').onmouseout = function(){
		document.getElementById('b4').style.display='none';
		document.getElementById('dotC').style.display='none';
	};
	document.getElementById('la5').onmouseover = document.getElementById('b5').onmouseover = function(){
		document.getElementById('b5').style.display='block';
		document.getElementById('dotC').style.display='block';
		document.getElementById('dotC').style.top = '287px';
		document.getElementById('dotC').style.left = '432px';
	};
	document.getElementById('la5').onmouseout = document.getElementById('b5').onmouseout = function(){
		document.getElementById('b5').style.display='none';
		document.getElementById('dotC').style.display='none';
	};
	document.getElementById('la6').onmouseover = document.getElementById('b6').onmouseover = function(){
		document.getElementById('b6').style.display='block';
		document.getElementById('dotC').style.display='block';
		document.getElementById('dotC').style.top = '332px';
		document.getElementById('dotC').style.left = '495px';
	};
	document.getElementById('la6').onmouseout = document.getElementById('b6').onmouseout = function(){
		document.getElementById('b6').style.display='none';
		document.getElementById('dotC').style.display='none';
	};
};
mv.ui.changeScene = function(){
	document.getElementById('bg2').onclick = function(){
		document.getElementById('scene2').style.display='block';
	}
};
mv.ui.changeScene2 = function(){
	document.getElementById('boxB').onclick = function(){
		document.getElementById('scene2').style.display='none';
		document.getElementById('scene3').style.display='block';
	}
};
mv.ui.fadeIn = function(obj){
	var iCur = mv.tools.getStyle(obj,'opacity');
	if ( iCur==1 ) {
		return false;
	}
	var value = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 2;
		if( value==100 ){
			clearInterval(obj.timer);
		} else {
			value +=iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},30);
};
mv.ui.fadeOut = function(obj){
	var iCur = mv.tools.getStyle(obj,'opacity');
	if ( iCur==0 ) {
		return false;
	}
	var value = 100;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = -2;
		if( value==0 ){
			clearInterval(obj.timer);
		} else {
			value +=iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},30);
};
mv.app = {};

mv.app.outText = function(){
	document.getElementById('box').onclick = function(){
		for (var i = 1; i <= 6; i++) {
			document.getElementById('b'+i).style.display='block';
			switch( i ){
				case 1:
					var info = '中共一大';
					document.getElementById('dotC').style.display='block';
					document.getElementById('dotC').style.top = '370px';
					document.getElementById('dotC').style.left = '580px';
					break;
				case 2:
					info = '进军井冈山';
					document.getElementById('dotC').style.display='block';
					document.getElementById('dotC').style.top = '440px';
					document.getElementById('dotC').style.left = '500px';
					break;
				case 3:
					info = '遵义会议';
					document.getElementById('dotC').style.display='block';
					document.getElementById('dotC').style.top = '415px';
					document.getElementById('dotC').style.left = '380px';
					break;
				case 4:
					info = '红军长征';
					document.getElementById('dotC').style.display='block';
					document.getElementById('dotC').style.top = '450px';
					document.getElementById('dotC').style.left = '520px';
					break;
				case 5:
					info = '革命圣地';
					document.getElementById('dotC').style.display='block';
					document.getElementById('dotC').style.top = '287px';
					document.getElementById('dotC').style.left = '432px';
					break;
				case 6:
					info = '挺进大别山';
					document.getElementById('dotC').style.display='block';
					document.getElementById('dotC').style.top = '332px';
					document.getElementById('dotC').style.left = '495px';
					break;
			}
			alert(info);
			document.getElementById('b'+i).style.display='none';
			document.getElementById('dotC').style.display='none';
		};
	}
};
mv.app.toBanner = function(){
	var oDd = document.getElementById('backboard-in');
	var aLi = oDd.getElementsByTagName('li');

	var iNow = 0;

	var timer = setInterval(auto,3000);
	function auto(){

		if( iNow==(aLi.length-1) ){
			iNow = 0;
		} else {
			iNow++;
		}

		for(var i=0;i<aLi.length;i++){
			mv.ui.fadeOut(aLi[i]);
		}

		mv.ui.fadeIn(aLi[iNow]);
	}
	document.getElementById('backboard').onmouseover =function(){
		clearInterval(timer);
	};
	document.getElementById('backboard').onmouseout =function(){
		timer = setInterval(auto,3000);
	};
};