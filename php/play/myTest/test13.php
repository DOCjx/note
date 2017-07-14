<html>
	<meta charset="utf-8">
<?php 
	$arr = array(
				array("姓名","性别","班级","手机号","qq号","性格爱好"),
				array("彭双喜","非女","14网工2班","15270865610","1783495167","踢球，看球赛，看小说"),
				array("温隆强","非女","网工2班","18365403235","1324121459","听歌，爬山，看电影，性格还算开朗"),
				array("黄钟英","男","正大学子班","13767554653","1599976402","打乒乓球、羽毛球，听歌，赏月"),
				array("林强","男","网工2班","157977355230","3286381039","打蓝球，跑步，听歌"),
				array("涂雪薇","女","网工1班","13755623531","1830424545","吃，睡，看书，写东西，敲代码"),
				array("涂宇昕","男","网工1班","15297911183","1023122541","打球、玩")
			);
	if ( isset($_POST['sub']) ){
		$name = $_POST['name'];
		$sex = $_POST['sex'];
		$class = $_POST['class'];
		$phone = $_POST['phone'];
		$qq = $_POST['qq'];
		$favorite = $_POST['favorite'];
		$get = array("$name","$sex","$class","$phone","$qq","$favorite");
		array_push($arr, $get);
		// var_dump($arr);
		// echo '<table style="border-spacing: 0;border:1px solid #666;width:1500px;height:500px;margin:auto;text-align:center;">';
		// 	for( $j=0;$j<count($arr[0]);$j++ ){
		// 		echo '<tr>';
		// 		for ($n=0; $n < count($arr); $n++) { 
		// 			// echo count($arr);
		// 			echo '<td style="border:1px solid #666;">'.$arr[$n][$j].'</td>';
		// 		}
		// 	echo '</tr>';
		// 	}
		// echo '</table>';
	// } else {
	}
		echo '<table style="border-spacing: 0;border:1px solid #666;width:1500px;height:500px;margin:auto;text-align:center;">';
			for( $j=0;$j<count($arr[0]);$j++ ){
				echo '<tr>';
				for ($n=0; $n < count($arr); $n++) { 
					// echo count($arr);
					echo '<td style="border:1px solid #666;">'.$arr[$n][$j].'</td>';
				}
			echo '</tr>';
			}
		echo '</table>';
	// }
?>
	<form action="" method="post" style="width:300px;margin:50px  500px;">
	<input type="text" name="name" placeholder="name" value="<?php
		if( isset($_POST['name']) ){
			echo $_POST['name'];
		}
		?>">
	<input type="text" name="sex" placeholder="sex" value="<?php
		if( isset($_POST['sex']) ){
			echo $_POST['sex'];
		}?>">
	<input type="text" name="class" placeholder="class" value="<?php
		if( isset($_POST['class']) ){
			echo $_POST['class'];
		}?>">
	<input type="text" name="phone" placeholder="phone" value="<?php
		if( isset($_POST['phone']) ){
			echo $_POST['phone'];
		}?>">
	<input type="text" name="qq" placeholder="qq" value="<?php
		if( isset($_POST['qq']) ){
			echo $_POST['qq'];
		}?>">
	<input type="text" name="favorite" placeholder="favorite" value="<?php
		if( isset($_POST['favorite']) ){
			echo($_POST['favorite']);
		}?>">
	<input type="submit" name="sub" value="提交">
	</form>
</html>