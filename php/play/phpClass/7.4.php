<?php 
	$conn = new mysqli();
	$conn->connect('localhost','root','');
	$conn->select_db('bbb');
	$conn->query('set names utf8');
	$result = $conn->query('select * from student');
	// $conn = new mysqli('localhost','root','','bbb');
	// $conn->query('set names utf8');
	// $sql = 'select * from student';
	// $result = $conn->query($sql);
	if (!$result){
		die('Unable to connect!').mysqli_connect_error();
	}
	while($row = $result->fetch_array()){
		print_r($row);
	}
	// var_dump($conn);
	// var_dump($result);
?>