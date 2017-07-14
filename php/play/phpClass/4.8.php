<?php 
	
	
	if ( isset($_POST['sub']) ){
		if (isset($_POST['input']) ) {
			function right ($s,$n) {
				return $n?substr($s,-$n):'';
			}
			function noHtml ($str) {
				while ( strpos($str, '<')!==false&&strpos($str, '>')!==false ) {
					$begin = strpos($str, '<');
					$end = strpos($str, '>');
					$length = strlen($str)-$end-1;
					$str = substr($str,0,$begin).right($str,$length);
				}
				return $str;
			}
			$str = $_POST['input'];	//"<div>nishi<span>wo</span>bushia</div>"
			echo noHtml($str).'<br>';
			$select = 'right';
			echo $select($str,6).'<br>';
			$select = 'noHtml';
			echo $select($str).'<br>';
		}
	}
	echo '<form action="" method="post"><input style="margin-top: 20px;width:500px;" type="text" name="input" placeholder="input something" value="';
	if( isset($_POST['input']) ){
		echo noHtml($str);
	}
	echo '"> <input type="submit" name="sub" value="提交">
	</form>';
 ?>