<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>退出</title>
</head>
<body>
	<?php 
		session_start();
		if( @$_GET['action']== 'logout' ){
			session_unset();
			session_destroy();
			header('Refresh:3; url=5.14.php');
			// for($i=3;$i>=1;$i--){
			// 	echo($i.' '); 
			// 	ob_flush();
			// 	flush();
			// 	sleep(1);
			// }
			echo '<br>安全退出！';
			// var_dump($_SESSION);
			// var_dump(session_id());
		} else {
			header('Refresh:3; url=5.14.php');
			// for($i=3;$i>=1;$i--){
			// 	echo($i.' '); 
			// 	ob_flush();
			// 	flush();
			// 	sleep(1);
			// }
			echo '<br>拒绝访问！';
		}

	?>
</body>
</html>
