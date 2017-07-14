<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>字符游戏</title>
</head>
<body>
	<div style="text-align: center;">
		<p style="color: red;">请输入一个字符串包含2个大写字母1个小写字母和1个数字！</p>
		<form action="" method="post">
			<input type="text" name="str" value="<?php echo @$_POST['str'];?>">
			<input type="submit" name="sub" value="提交">
		</form>
		<?php 
		//字符串处理及统计函数、字符串数据类型、字符数据类型、操作符、数学函数、判断语句、循环语句、赋值语句、$_POST数组、简单html和css
		//输入一个字符串里面包含2个大写字母1个小写字母和1个数字。小写字母转大写字母放在字符串中的数字和生成的随机数的中间，输出在第三行。将大写字母转小写输出在第二行。第一行放随机数和字符串中数字的和
			if( @$_POST['sub']&&strlen($_POST['str'])==4 )	{
				$a = 'aaa';
				$b = 'bbb';
				0||  $a = $b;
				echo $a;
				$rand = rand(1,9);
				$str = $_POST['str'];
				$second = '';
				$third = '';
				$sum = 0;
				for($i=0;$i<4;$i++){
					if( is_numeric($str[$i]) ) $sum = $rand+$str[$i];
					elseif( "A"<=$str[$i]&&$str[$i]<="Z" ) $second = $second.$str[$i].' ';
					elseif( "a"<=$str[$i]&&$str[$i]<="z" ) $third = $third.$str[$i].' ';
				}
				if( $sum&&$second&&$third&&strlen($second)==4&&strlen($third)==2 ){
					$second = strtolower($second);
					$third = strtoupper($third);
					echo($sum);
					echo "</br>";
					echo($second);
					echo "</br>";
					echo($rand.' '.$third.($sum-$rand));
				}else{
					echo '<p style="color: red;">数据不合法！</p>';
				}
			}elseif( strlen(@$_POST['str'])==4 ){
				echo '<p style="color: red;">数据不合法！</p>';
			}
		?>
	</div>
</body>
</html>