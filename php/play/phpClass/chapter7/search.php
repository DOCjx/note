<?php
    require('conn.php'); 
    $sql = "select * from student";
    @$keyword = trim($_GET['keyword']);
    @$type = $_GET['type'];
    if(!empty($keyword)) {
        $sql = $sql." where $type like '%$keyword%'";
    }
    if(isset($_GET['page']) && (int)$_GET['page']>0) 
        $page_id = $_GET['page'];
    else
        $page_id = 1;
    $page_size = 4;  
     
    $result = mysql_query($sql, $conn);
    $result_num = mysql_num_rows($result);
    $page_num = ceil($result_num/$page_size);  
    
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <h3>分页显示记录</h3>
    <form action="" method="get">
        <div style="width: 100%; border: 1px solid gray; background: #e0e0e0; margin-bottom: 0.5em">
            查找学生信息，请输入关键字
            <select name="type" style="width:100px; text-align:center">
                <option value="ID" <?php if($type=='ID') echo 'selected' ?>>学号</option>
                <option value="Name" <?php if($type=='Name') echo 'selected' ?>>姓名</option>
                <option value="Gender" <?php if($type=='Gender') echo 'selected' ?>>性别</option>
                <option value="Age" <?php if($type=='Age') echo 'selected' ?>>年龄</option>
                <option value="Major" <?php if($type=='Major') echo 'selected' ?>>专业</option>
            </select>
            <input required type="text" name="keyword"  style="width:300px" value="<?php echo $keyword ?>">
            <input type="submit" value="查询">
        </div>
    </form>
</body>

</html>

<?php
    echo 
        '<table border="1"  width="100%">
        <tr bgcolor="#e0e0e0">
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>专业</th>
        </tr>';
    $start = ($page_id-1)*$page_size;
    if(mysql_data_seek($result, $start)) {
        for($i=0; $i<$page_size; $i++) {
            if($row=mysql_fetch_row($result)) {                
                echo
                "<tr align='center'>
                    <td> $row[0] </td>
                    <td> $row[1] </td>
                    <td> $row[2] </td>
                    <td> $row[3] </td>
                    <td> $row[4] </td>
                 </tr>";  
            }              
        }
    }

    echo '</table>';
//    mysql_free_result($result);

    echo "<p align='right'>";
    if($page_id!=1) //如果是首页直接显示后面页数
        echo "<a href='?page=1&type=$type&keyword=$keyword'>首页</a> <a href='?page=".($page_id-1)."&type=$type&keyword=$keyword'>上一页</a>&nbsp";
    for($i=1; $i<=$page_num; $i++) { //显示出所有可能的页数链接
        if($i==$page_id)
            echo "<font style='color:red; font-weight:bold'>$i</font>&nbsp";
        else 
            echo "<a href='?page=$i&type=$type&keyword=$keyword'>$i</a>&nbsp";
    }
    if($page_id!=$page_num)
        echo "<a href='?page=".($page_id+1)."&type=$type&keyword=$keyword'>下一页</a> <a href='?page=".$page_num."&type=$type&keyword=$keyword'>末页</a>";    
    echo "&nbsp$page_id/{$page_num}页";
    echo "&nbsp共{$result_num}条记录&nbsp";
    echo "</p>";
?>