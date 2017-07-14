<?php 
	$a = array("1","2","3");
	$j = 0;
	foreach ($a as &$value) {
		$value+=1;
	}
	var_dump($a);
?>