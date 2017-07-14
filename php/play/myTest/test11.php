<?php 
	$arr = array(array("姓名","性别","班级","手机号","qq号","性格爱好"),
				array("彭双喜","非女","14网工2班","15270865610","1783495167","踢球，看球赛，看小说"),
				array("温隆强","非女","网工2班","18365403235","1324121459","听歌，爬山，看电影，性格还算开朗"),
				array("黄钟英","男","正大学子班","13767554653","1599976402","打乒乓球、羽毛球，听歌，赏月"),
				array("林强","男","网工2班","157977355230","3286381039","打蓝球，跑步，听歌"),
				array("涂雪薇","女","网工1班","13755623531","1830424545","吃，睡，看书，写东西，敲代码"),
				array("涂宇昕","男","网工1班","15297911183","1023122541","打球、玩")
			);
	echo '<table style="border-spacing: 0;border:1px solid #666;width:800px;height:450px;margin:auto;text-align:center;">';
	foreach ($arr as $a) {
		echo '<tr>';
		foreach ($a as $value) {
			echo '<td style="border:1px solid #666;">'.$value.'</td>';
		}
		echo '</tr>';
	}
	echo '</table>';
	echo '<br><br><br><br><br>';
	echo '<table style="border-spacing: 0;border:1px solid #666;width:800px;height:450px;margin:auto;text-align:center;">';
	for ( $i=0;$i<count($arr);$i++ ){
		echo '<tr>';
		for( $j=0;$j<count($arr[$i]);$j++ ){
			echo '<td style="border:1px solid #666;">'.$arr[$i][$j].'</td>';
		}
		echo '</tr>';
	}
	echo '</table>';
	echo '<br><br><br><br><br>';
	echo '<table style="border-spacing: 0;border:1px solid #666;width:800px;height:450px;margin:auto;text-align:center;">';
	$i = 0;
	while ( $i<count($arr) ) {
		$j = 0;
		echo '<tr>';
		while ( $j<count($arr[$i]) ) {
			echo '<td style="border:1px solid #666;">'.$arr[$i][$j].'</td>';
			$j++;
		}
		echo '</tr>';
		$i++;
	}
	echo '</table>';
	echo '<form action="" method="post" style="width:300px;margin:50px  500px;"><input type="text" name="input" placeholder="请输入要找的信息!" value="';
	if( isset($_POST['input']) ){
		echo $_POST['input'];
	}
	echo '"> <input type="submit" name="sub" value="提交"></form>';
	if ( isset($_POST['sub']) ){
		if ( $_POST['input']!=='' ) {
			$infor = $_POST['input'];
			echo '<table style="border-spacing: 0;border:1px solid #666;width:800px;margin:auto;text-align:center;">';
			foreach ($arr as $key=>$a) {
				foreach ($a as $value) {
					if($infor == $value){
						$getkey = $key;
						foreach ($arr[$getkey] as $value) {
					    echo $value."\t";
						}
					} 
				}
			}
			
			echo '</table>';
		} else {
			echo '<span style="width:300px;margin:auto;display:block;">请输入值！</span>';
		}
	}
	
 ?>