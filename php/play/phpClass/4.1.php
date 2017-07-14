<?php 
	// var_dump(str_replace("kj","<br>","askjlkj;dh",$n));
	// echo ($n);
	$n = 5;
	function test(&$n)
	{
		$sum = 0;
		for ($i=1; $i<=$n; $i++) { 
			$sum += $i;
		}
		$n++;
		return $sum;
	}
	echo test($n)."<br>";
	echo $n;
?>