<div align="center" style=" color: grey; padding-bottom: 20px; background-color: #65EAA1;">
	<form action="" method="post">
		<input style="margin-top: 20px;" type="text" name="n" placeholder="输入杨辉三角行数!" value=
			<?php // 使刷新之后值还在文本框
				if(isset($_POST['n'])){
				echo '"'.$_POST['n'].'"';
				}
			?>
		>
		<input type="submit" name="sub" value="提交">
	</form>
	<?php
		if ( isset($_POST['sub']) ) {
			if ( isset($_POST['n'])&&$_POST['n']>1 ) {
				$n  = $_POST['n'];
			    $arr = array();
			    for ($i=1; $i <= $n; $i++) { 
			    	for ($j=1; $j <= $i; $j++) { 
			    		if ( $i==$j ) {
					    	$array[$i][$j] = 1;
					    } elseif ( $j==1 ){
			    			$array[$i][$j] = 1;
					    } else {
					    	$array[$i][$j] = $array[$i-1][$j-1]+$array[$i-1][$j];
					    }
					    echo ' '.$array[$i][$j].' '.' ';
				    }
				    echo '<br>';
			    }
			    
		    } else {
		    	echo '请输入大于1的整数！';
		    }
		}
	?>
</div>