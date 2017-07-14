<?php 
	$str = "true or false;";
	var_dump(eval($str));
	if( eval($str) ){
		echo 1;
	} else {
		echo 0;
	}
?>