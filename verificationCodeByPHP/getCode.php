<?php
	session_start();
	 
	$width=150;//验证码宽度
	$height=60;//验证码高度
	$pixNum=200;//生成模糊点的数量
	$pix=boolval(1);//是否生成模糊像素
	$rectangle=boolval(1);//是否需要边框
    $size = sqrt(pow($width,2)+pow($height,2))/4;//字体大小
	$textPotX=$width/10;//文字相对与图片开始位置
	$textPotYS=$height/2;//文字上下浮动开始像素
	$textPotYE=$height/2+$height/3;//文字上下浮动结束像素
	//十进制或十六进制整数
	$backColorR=255;
	$backColorG=255;
	$backColorB=255;
	$fontColorR=0;
	$fontColorG=0;
	$fontColorB=0;
	$pixColorR=187;//生成的像素点颜色
	$pixColorG=230;
	$pixColorB=247;
	 
	header("Content-type: image/png");
	//随机生成验证码文字
	function random($len) {
	    $arr1=range('0','9');
	    $arr2=range('a','z');
	    $arr3=range('A','Z');
	    $arr=array_merge($arr1,$arr2,$arr3);
	    shuffle($arr);
	    mt_srand();
	    $strs = "";
	    for ($i = 0; $i < $len; $i++) {
	        $strs .= $arr[mt_rand(0, 61)];
	    }
	    return $strs;
	}
	//随机生成的字符串
	$str = random(4);
	$img = @imagecreate($width, $height)
	    or die("Cannot Initialize new GD image stream");
	//背景色
	$back = imagecolorallocate($img, $backColorR, $backColorG, $backColorB);
	//字体色
	$fontColor = imagecolorallocate($img, $fontColorR, $fontColorG, $fontColorB);
	$font = "FZSTK.TTF";
	for($i=0,$j=$textPotX;$i<4;$i++){

      $array = array(-1,1);
      $p = array_rand($array);
      $an = $array[$p]*mt_rand(1,10); //扭曲角度
      imagettftext($img, $size, $an, $j,rand($textPotYS,$textPotYE),imagecolorallocate($img,rand(0,100),rand(0,100),rand(0,100)), $font, $str[$i]);//生成验证字符窜
      $j+=$size/2+6;
	}
	//模糊点颜色
	$pixColor = imagecolorallocate($img, $pixColorR, $pixColorG, $pixColorB);
	//输出边框
	$rectangle&&imagerectangle($img, 0, 0, $width -1, $height -1, $fontColor);
	//绘模糊作用的点
	if( $pix ){
		mt_srand();
		for ($i = 0; $i < $pixNum; $i++) {
		    imagesetpixel($img, mt_rand(0, $width), mt_rand(0, $height), $pixColor);
		}
	}
	$str = md5(strtolower($str));
	$_SESSION['co']=$str;
	imagepng($img);
	imagedestroy($img);
?> 