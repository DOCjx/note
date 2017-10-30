<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>生成验证码</title>
</head>
<body>
	<form action="formCheck.php" method="post">
		<input type="text" name="code" id="code">
		<img id="checkpic" width="120" height="40" onclick="changing();" src='getCode.php' />
		<input type="submit">
	</form>
	<?php 
		echo @$_POST['code'];
	?>
	<script>
		function changing(){
		    document.getElementById('checkpic').src="getCode.php?+Math.random()";
		} 
	</script>
</body>
</html>
