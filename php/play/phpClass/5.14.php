<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>登入状态维持</title>
</head>
<body>
	<?php 
		session_start();
		if(isset($_POST['sub'])||@$_SESSION['user']){
			$user = @$_SESSION['user']?$_SESSION['user']:$_POST['name'];
			$psd = @$_SESSION['psd']?$_SESSION['psd']:$_POST['psd'];
			if( $user=='Admin'&&$psd=='aaa' ){
				$_SESSION['user'] = $user;
				$_SESSION['psd'] = $psd;
				header('location:5.15.php');
			} else {
				echo "用户不存在在或密码错误！";
				header('Refresh:2; url=5.14.php');
			}
		} else {
			echo <<<STR
			<form action="" method="post">
				用户名：<input type="text" name="name">
				密码：<input type="password" name="psd">
				<input type="submit" name="sub" value="提交">
			</form>
STR;
			// var_dump($_SESSION);
			// var_dump(session_id());
		}
	 ?>
</body>
</html>
