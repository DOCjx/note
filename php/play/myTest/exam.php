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
		if(isset($_POST['sub'])) {
			foreach($_POST as $key=>$value)                 // $_POST是包含表单里的所有值的一个数组，可以var_dump看看
				if($key!='sub')   $add[] = $value;          // 把取出来的6个值装到一维里面
			array_push($arr,$add);                          // 把刚才的一维数组添加到原有的二维数组后面去
		}
		echo '<table border="1px" bordercolor="#000" cellspacing="0">';
		for($i=0;$i<count($arr[0]);$i++) {                     
			echo '<tr>';
			foreach($arr as $value) echo '<td>'.$value[$i].'</td>';
			echo '</tr>';
		}
		echo '</table>';
	?>
</body>
</html>	