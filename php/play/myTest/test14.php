<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
</head>	
<body>
	<form action="" method="post">
		<input type="text" name="name"   value="<?php if(isset($_POST["name"])){  echo $_POST["name"];}  ?>" >
		<input type="text" name="sex"    value="<?php if(isset($_POST["sex"])){   echo $_POST["sex"];}   ?>" >
		<input type="text" name="class"  value="<?php if(isset($_POST["class"])){ echo $_POST["class"];} ?>" >
		<input type="text" name="phone"  value="<?php if(isset($_POST["phone"])){ echo $_POST["phone"];} ?>" >
		<input type="text" name="qq"     value="<?php if(isset($_POST["qq"])){    echo $_POST["qq"];}    ?>" >
		<input type="text" name=" hobby" value="<?php if(isset($_POST["hobby"])){ echo $_POST["hobby"];} ?>" >
		<input type="submit" name="sub"  value="添加" >
	</form>
	<?php
		$arr = array(
			array("姓名","性别","班级","手机号","qq号","性格爱好"),
			array("彭双喜","男","14网工2班","15270865610","1783495167","踢球"),
			array("温隆强","男","网工2班","18365403235","1324121459","听歌，爬山，看电影，性格还算开朗"),
			array("黄钟英","男","正大学子班","13767554653","1599976402","打乒乓球、羽毛球，听歌，赏月"),
			array("林强","男","网工2班","157977355230","3286381039","打蓝球，跑步，听歌"),
			array("涂雪薇","女","网工1班","13755623531","1830424545","吃，睡，看书，写东西，敲代码"),
			array("涂宇昕","男","网工1班","15297911183","1023122541","打球、玩")
		);
		if(isset($_POST['sub'])){
			foreach ($_POST as $v){
				if($v!='添加'){
					$get[] = $v;
				}
			};
			array_push($arr,$get);
		}
//		var_dump($get);
		echo '<table style="border-spacing: 0;border:1px solid #666;width:1500px;height:500px;margin:auto;text-align:center;">';
			for( $j=0;$j<count($arr[0]);$j++ ){
				echo '<tr>';
				foreach ($arr as $value) { 
					// echo count($arr);
					echo '<td style="border:1px solid #666;">'.$value[$j].'</td>';
				}
			echo '</tr>';
			}
		echo '</table>';
	?>
</body>
</html>	