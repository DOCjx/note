<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>生成验证码</title>
</head>
<body>
	<form action="formCheck.php" method="post">
		<input type="text" name="code" id="code">
		<img id="checkpic" width="120" height="40" src='getCode.php' />
		<input type="submit">
	</form>
	<?php 
		session_start();
		echo $_SESSION['co'];
	?>
	<script>
		((w)=>{
			document.getElementById('checkpic').onclick= () => {
				document.getElementById('checkpic').src="getCode.php?+Math.random()";
			}
		})(window);
	</script>
</body>
</html>
