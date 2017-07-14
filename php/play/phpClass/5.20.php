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
	// var_dump($_POST);
	if( isset($_POST['sub']) ){
		date_default_timezone_set("PRC");
		if( $_POST['uName']=='Admin'&&$_POST['uPsd']=='' ){
			setcookie("user[uName]",$_POST['uName'],time()+(int)$_POST['sTime']*24*3600);
			setcookie("user[dt]",date("Y-m-d H:i:s"),time()+(int)$_POST['sTime']*24*3600);
			setcookie("user[num]",1,time()+(int)$_POST['sTime']*24*3600);
			setcookie("user[expire]",time()+(int)$_POST['sTime']*24*3600,time()+$_POST['sTime']*24*3600);
			// var_dump($_COOKIE);
			echo "欢迎".$_POST['uName']."首次光临！";
		} else {
			echo "<script>alert('用户名或密码不对！');location.href='5.19.php';</script>";
		}
	} else {
		echo "<script>alert('非法访问！');location.href='5.19.php ';</script>";
	}
 ?>
</body>
</html>
