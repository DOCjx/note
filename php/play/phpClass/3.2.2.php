<?php
	$a="全局变量";
	function fun(){
		global $a;
		echo $a."<br>";
		static $a="局部变量";
		echo $a."<br>";
	}
	fun();
	echo $a."<br>";
?>