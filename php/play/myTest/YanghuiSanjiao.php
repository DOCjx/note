<?php
	echo "杨辉三角：</br>";
	echo '<form action="" method="post" name="a1">';
	echo '<input type="text" name="demo" value="';
	if(isset($_POST['demo'])) echo $_POST['demo'];
	echo '">';
	echo '<input type="submit" name="sub" value="提交">';
	echo '</form>';
	if(isset($_POST['sub'])) {
		$n = $_POST['demo'];
		for($i=0;$i<$n;$i++){
			for($j=0;$j<=$i;$j++){
    			if($j==0||$i==$j)  $arr[$i][$j]=1;
    			else  $arr[$i][$j]=$arr[$i-1][$j]+$arr[$i-1][$j-1];
 				echo $arr[$i][$j]."\t";
 			}
 			echo "<br>";
 		} 
	}
?>