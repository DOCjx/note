<?php 
	// var_dump($_COOKIE);
	if( @$_COOKIE['user']['uName']<>'' ){
		date_default_timezone_set("PRC");
		$lastDt = $_COOKIE['user']['dt'];
		$visnum = (int)$_COOKIE['user']['num']+1;
		$expire = (int)$_COOKIE['user']['expire'];
		setcookie("user[num]",$visnum,$expire);
		setcookie("user[dt]",date("Y-m-d H:i:s"),$expire);
		echo "欢迎你：".$_COOKIE['user']['uName']."<br>";
		echo "你上次访问是在".$lastDt."<br>";
		echo "这是第：".$visnum."次访问<br>";
		echo '<a href="5.20.1.php">注销</a>';
	} else {
		echo <<<STR
			<form action="5.20.php" method="post">
				<P>用户名：<input type="text" name="uName"></P>
				<P>密&nbsp;码：<input type="text" name="uPsd"></P>
				<P>保存时间：<select name="sTime">
								<option value="-1">不保存</option>
								<option value="7">保存1周</option>
								<option value="30">保存1月</option>
							<select>
				</P>
				<input type="submit" name="sub">
			</form>
STR;
	}
 ?>