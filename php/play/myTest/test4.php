<div align="center" width="200px">
	<form action="" method="post">
		<input type="text" name="n" placeholder="输入杨辉三角行数!" value=
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
			    $arr[1] = array_fill(0,3,0);
			    $arr[1][1] = 1;
			    echo ' '.' '.'1'.' '.' '.'<br/>';
			    for( $i=2;$i<=$n;$i++ ){
			    	$arr[$i]=array_fill(0,($i+2),0);
			    	for( $j=1;$j<=$i;$j++ ){
			    		$arr[$i][$j]=$arr[$i-1][$j-1]+$arr[$i-1][$j];
			        	printf("%-5d",$arr[$i][$j]);
			    	}
			    	echo"<br/>";
				}
		    } else {
		    	echo '请输入大于1的整数！';
		    }
		}
	?>
</div>