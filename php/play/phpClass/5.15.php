<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>首页</title>
</head>
<body>
	<?php 
		session_start();
		if(isset($_SESSION['user'])){
			echo '欢迎：'.$_SESSION['user'].'<br>';
			echo '<a href="5.16.php?action=logout">注销</a>';
			// var_dump($_SESSION);
			// echo session_id();
		} else {
			header('Refresh:3; url=5.14.php');
			echo '<br>您未登入！';
		}
	?>
</body>
</html>
