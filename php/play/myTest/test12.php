<div align="center" style=" color: grey; padding-bottom: 20px; background-color: #65EAA1;">
	<form action="" method="post">
		<input style="margin-top: 20px;" type="text" name="n" placeholder="" value=
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
			if ( isset($_POST['n'])) {
				$n  = $_POST['n'];
			    var_dump($n);
		    } else {
		    	echo 'please input again!';
		    }
		}
	?>
</div>