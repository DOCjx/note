<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>猜数字游戏</title>
</head>

<body>
    
    <?php        
        
        if(isset($_GET["again"]) && $_GET["again"]) {            
            echo "<script> document.location=\"p129-2.php\" </script>"; //跳转至当前页面
            unset($_POST["submit"]); //重新玩一次
        }    
    
        if(isset($_POST["submit"]) && !empty($_POST["num"])) {
            $num = $_POST["num"];
            $answer = $_POST["answer"]; //一直保持不变 
            $times = $_POST["times"]-1; //每次确定，减少一次
//            echo $answer;
            if($num==$answer && $times>=1) {
                $used_times = 5 - $times;
                $info = "正确，你用了{$used_times}次机会！ <span color='blue'><a href=\"?again=true\">再玩一次就戳我</a></span>";
                $submit_status = "disabled";                
            } elseif($times>=1) {                
                if($num>$answer)
                    $info = "猜大了，你还有<b>$times</b>次机会!";
                else
                    $info = "猜小了，你还有<b>$times</b>次机会!";                
            } else{
                $info = '不正确，五次机会都用完了！'."<span color='blue'><a href=\"?again=true\">再玩一次就戳我</a></span>";
            }                    
        } elseif(isset($_POST["num"]) && empty($_POST["num"])) {
            
            $info = '请输入整数（1-10）！';
            
        } else {
            $answer = rand(1, 10);  //首次生成答案
            $times = 5; //保存猜的次数            
//            echo $answer;
        }  
        
    ?>
   
    <form action="" method="post">
        <p>猜数字游戏，请输入整数（1-10），共五次机会：</p>
        <input type="text" name="num" size=3 style="text-align: center" value="<?php echo @$num; ?>">        
        <input type="submit" name="submit" value="确定" <?php echo @$submit_status; ?>>        
        <input type="hidden" name="answer" value="<?php echo @$answer; ?>">  
        <input type="hidden" name="times" value="<?php echo @$times; ?>">       
    </form>
    
    <p> <font color="red"> <?php echo @$info; ?> </font> </p>
    
</body>

</html>