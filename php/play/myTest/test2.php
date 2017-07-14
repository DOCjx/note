<?php 
	$arr = array(array("图书名称","作者","价格","出版社"),
				array("php","王彦辉","36","东软	电子出版社"),
				array("asp","李英杰","30","东软电子出版社"),
				array("jsp","李英杰","33","东软电子出版社")
			);
	echo '<table style="border-spacing: 0;border:1px solid #666;width:500px;height:200px;margin:auto;text-align:center;">';
	foreach ($arr as $a) {
		echo '<tr>';
		foreach ($a as $value) {
			echo '<td style="border:1px solid #666;">'.$value.'</td>';
		}
		echo '</tr>';
	}
	echo '</table>';
	// print_r($arr);
 ?>