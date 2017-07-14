<?php 
	$clearstr = "黄|黑|走私|发票|枪支";
	$clear = explode("|", $clearstr);
	$input = "带黄色头盔的黑人消防员听说有人走私枪支的发票。";
	// var_dump($clear); 
	foreach ($clear as $value) {
		// if ( strpos($input, $value) !== false ) {
	 			// var_dump(strpos($input, $value));
	 		$output = str_replace($value,'',$input);
			$input = $output;
	 	// }
	}
	echo $output.'<br>';
	// var_dump ($output);
	// for ($i=0;$i<count($clear); $i++) { 
	// 	if ( strpos($input, $clear[$i]) !== false ) {
	// 		// var_dump(strpos($input, $value));
	// 		$output = str_replace($clear[$i],'',$input);
	// 		$input = $output;
	// 	}
	// }
?>