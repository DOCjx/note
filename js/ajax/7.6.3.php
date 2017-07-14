<?php
    $name = @$_POST['name'] ? @$_POST['name'] : @$_GET['name'];
    $action = @$_GET['action'];
    header("Content-Type: text/plain;charset=utf-8"); 
    $dsn = "mysql:host=localhost;dbname=bbb";
    $db = new PDO($dsn,'root','');
    $db->query('set names utf8');
    // var_dump ($_POST);
    $sql = "select * from student where name ='$name'";
    $result = $db->query($sql);
    // var_dump($db);
    $result->setFetchMode(PDO::FETCH_ASSOC);
    $row = $result->fetch(4);
    if( !$action ){
        if( $row ){
            echo <<<STR
            <table>
                <tr>
                    <th>姓名：</th>
                    <th>学号：</th>
                </tr>
                <tr>
                    <td>$row[1]</td>
                    <td>$row[0]</td>
                </tr>
            </table>
STR;
        }else{
            echo '未找到结果!';
        }
    }else{
        $getData = $_GET['callback'];
        echo $getData.'('.json_encode($row).')';
    }
    
?>