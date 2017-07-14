<?php 
	echo '<form action="?&id=2" method="post"><input style="margin-top: 20px;" type="text" name="input" placeholder="input an e-mail!" value="';
	if( isset($_POST['input']) ){
		echo $_POST['input'];
	}
	echo '"> <input type="submit" name="sub" value="提交">
	</form>';
	if ( isset($_POST['sub']) ){
		if (isset($_POST['input']) ) {
			var_dump($_POST);
			var_dump($_GET);
			var_dump($_REQUEST);
			var_dump($_SERVER);
			var_dump($_SESSION);
			var_dump($_COOKIE);
			var_dump($_FILE);
			var_dump($_ENV);
		}
	}
 ?>