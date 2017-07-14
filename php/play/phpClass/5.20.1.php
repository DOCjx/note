<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
<?php
	setcookie("user[uName]","",-time());
	header('Refresh:3; url=5.19.php');
		for($i=3;$i>=1;$i--){
			echo($i.' ');
			ob_flush();
			flush();
			sleep(1);
		}
	echo '<br>安全退出！';
 ?>
</body>
</html>
