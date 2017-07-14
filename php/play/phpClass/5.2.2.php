<?php 
	if( $_GET['flag']==1 ){
		session_start();
		var_dump($_SERVER);
		var_dump(session_id());
		date_default_timezone_set('PRC');
		echo date('Y-m-d G:i:s',$_SERVER['REQUEST_TIME']).'<br>';
		echo date('Y-m-d G:i:s',time());
		exit();
	} else {
		header("location:?flag=1");
		exit();
	}
	header("location:5.1.php");
 ?>