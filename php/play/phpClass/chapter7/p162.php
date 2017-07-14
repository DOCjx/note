<?php
    require('conn.php');
    $page_id = 2;
    $page_size = 4;
    $result = mysql_query("select * from student", $conn);
    $result_num = mysql_num_rows($result);
    $page_num = ceil($result_num/$page_size);
    $result = mysql_query("select * from student limit ".($page_id-1)*$page_size.", ".$page_size);
    echo 
    '<table border="1" width="80%">
        <tr bgcolor="#e0e0e0">
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>专业</th>
        </tr>';
    while($row=mysql_fetch_row($result)) {
        echo
        "<tr>
            <td> $row[0] </td>
            <td> $row[1] </td>
            <td> $row[2] </td>
            <td> $row[3] </td>
            <td> $row[4] </td>
         </tr>";           
    }
    echo '</table>';
    mysql_free_result($result);
?>