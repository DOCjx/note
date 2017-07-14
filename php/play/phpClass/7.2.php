<?php 
	@$connt = mysql_connect("localhost","root","");
	mysql_query("set names 'gb2312'");
	mysql_select_db("aaa",$connt);
	$result = mysql_query("SELECT course.Name, AVG(Score) AS AVG FROM student, grade, course WHERE student.ID = StudentID AND grade.CourseID = course.ID GROUP BY course.ID ORDER BY AVG(Score) DESC");
	for($i=0;$i<1;$i++){
		$row = mysql_fetch_assoc($result);
	}
	print_r($row);
 ?>