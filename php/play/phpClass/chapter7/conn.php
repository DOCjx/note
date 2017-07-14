<?php 
	$conn = @mysql_connect("localhost","root","");
	mysql_query("set names utf8");
	mysql_select_db("bbb", $conn);
 ?>