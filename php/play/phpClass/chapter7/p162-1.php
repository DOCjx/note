<?php
    require('conn.php');
    $page_id = 2;
    $page_size = 4;
    $result = mysql_query("select * from student", $conn);
    $result_num = mysql_num_rows($result);
    $page_num = ceil($result_num/$page_size);
    mysql_data_seek($result, ($page_id-1)*$page_size);
    echo 
    '<table border="1" width="80%">
        <tr bgcolor="#e0e0e0">
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>专业</th>
        </tr>';
    $i = 1;
    while(($row=mysql_fetch_row($result)) && ($i<=$page_size)) {
        echo
        "<tr>
            <td> $row[0] </td>
            <td> $row[1] </td>
            <td> $row[2] </td>
            <td> $row[3] </td>
            <td> $row[4] </td>
         </tr>";  
        $i++;
    }
    echo '</table>';
    mysql_free_result($result);
?>