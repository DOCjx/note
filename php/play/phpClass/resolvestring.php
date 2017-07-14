<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>play</title>
	<link rel="stylesheet" href="">
</head>
<body>
	
	<?php
		$a='abcd闵LOVE军儿';//测试的字符串，包含中文西文

		//下面的测试输出为上，因为在编码为utf-8时，一个中文字符占3个长度
		//echo strlen('闵'); 
		$b='';
		$i=0;
		while($i<strlen($a))
		{
		    if(ord(substr($a,$i,1))>0xa0)//ord函数判断该字符串是否是中文
		    {
		       $b=substr($a,$i,3).$b;//这句很重要，倒序！
		       $i+=3;
		    }
		    else
		    {

		      $b=substr($a,$i,1).$b;
		      $i++;
		    }
		}
		echo $b;
	?>
</body>
</html>