<?php 
	$conn = new mysqli('localhost','root','','bbb');
	$conn->query('set names utf8');
	$sql = 'select * from student';
	$result = $conn->query($sql);
	echo '<table style="border:1px solid #666;">';
	while ( $row=$result->fetch_row() ) {
		echo <<<STR
				<tr>
					<td style="border:1px solid #666">$row[0]</td>
					<td style="border:1px solid #666">$row[1]</td>
					<td style="border:1px solid #666">$row[2]</td>
					<td style="border:1px solid #666">$row[3]</td>
					<td style="border:1px solid #666">$row[4]</td>
				</tr>
STR;
	}
	echo '</table>';
	echo $result->num_rows;
 ?>