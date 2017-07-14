<?php 
	// $fun = 'add';
	// $fun = 'subtract';
	// $fun = 'multiply';
	$fun = 'divide';

	function add($a,$b){
		return $a+$b;
	}

	function subtract($a,$b){
		return $a-$b;
	}

	function multiply($a,$b){
		return $a*$b;
	}

	function divide($a,$b){
		if(!empty($b)) return $a/$b;
		else return "数据非法！";
	}
	echo $fun(12,0);

	$test = function($name){
		return $name+5;
	};
	echo '<br>';
	echo $test(5);
 ?>