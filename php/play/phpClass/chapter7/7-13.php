<?php
    require('conn.php');
    if(isset($_GET['page']) && (int)$_GET['page']>0) 
        $page_id = $_GET['page'];
    else
        $page_id = 1;
    $page_size = 4; 
    $result = mysql_query("select * from student", $conn);
    $result_num = mysql_num_rows($result);
    $page_num = ceil($result_num/$page_size);
    $result = mysql_query("select * from student limit ".($page_id-1)*$page_size.", ".$page_size);
    echo '<h3>分页显示记录</h3>' ;   
    echo 
        '<table border="1"  width="100%">
        <tr bgcolor="#e0e0e0">
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>专业</th>
        </tr>';
    while($row=mysql_fetch_row($result)) {
        echo
        "<tr align='center'>
            <td> $row[0] </td>
            <td> $row[1] </td>
            <td> $row[2] </td>
            <td> $row[3] </td>
            <td> $row[4] </td>
         </tr>";           
    }
    echo '</table>';
    mysql_free_result($result);

    echo "<p align='right'>";
    if($page_id!=1) //如果是首页直接显示后面页数
        echo "<a href='?page=1'>首页</a> <a href='?page=".($page_id-1)."'>上一页</a>&nbsp";

    for($i=1; $i<=$page_num; $i++) { //显示出所有可能的页数链接
        if($i==$page_id)
            echo "<font style='color:red; font-weight:bold'>$i</font>&nbsp";
        else 
            echo "<a href='?page=$i'>$i</a>&nbsp";
    }

    if($page_id!=$page_num)
        echo "<a href='?page=".($page_id+1)."'>下一页</a> <a href='?page=".$page_num."'>末页</a>"; 

    echo "&nbsp$page_id/{$page_num}页";
    echo "&nbsp共{$result_num}条记录&nbsp";
    echo "</p>";
?>