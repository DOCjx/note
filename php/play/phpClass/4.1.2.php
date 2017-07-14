<?php 
	echo '<form action="" method="post"><input style="margin-top: 20px;" type="text" name="input" placeholder="input an e-mail!" value="';
	if( isset($_POST['input']) ){
		echo $_POST['input'];
	}
	echo '"> <input type="submit" name="sub" value="提交">
	</form>';
	if ( isset($_POST['sub']) ){
		if (isset($_POST['input']) ) {
			$mail = $_POST['input'];
			if (strpos($mail,'@')&&strpos($mail,'.')) {
				echo '你的名字是'.strtok($mail,"@").'你的邮箱名是'.substr($mail,strpos($mail,"@")+1);
			} else {
				echo '你输入的邮箱非法！';
			}
		}
	}
?>