<html>
    <body>
        <?php
            if( isset($_POST['sub'])&&!empty($_POST['input']) ){
                session_start();
                if( !empty($_SESSION) ){
                    @$_SESSION['have']--;
                } else {
                    $_SESSION['have'] = 4;
                    $_SESSION['answer'] = rand(1,10);
                }
                $used = 5-$_SESSION['have'];
                if( $_SESSION['have']>=1 ){
                    if( $_POST['input']==$_SESSION['answer'] ){
                        $info = '<font color="green">你赢了！输入数字再玩一次！</font>';
                        session_unset();
                        session_destroy();
                    } elseif( $_POST['input']>$_SESSION['answer'] ) {
                        $info = '<font color="red">太大了！你用了 '.$used.' 次机会！</font>';
                    } elseif( $_POST['input']<$_SESSION['answer'] ) {
                        $info = '<font color="red">太小了！你用了 '.$used.' 次机会！</font>';
                    } 
                } else {
                    $info = '<font color="red">你输了！输入数字再玩一次！</font>';
                    session_unset();
                    session_destroy();
                }
                // var_dump($_SESSION);
                // var_dump($_POST);
                // var_dump($_REQUEST);
            }
        ?>        
        <form method="post" align="center">
            <p>输入1-10中一个数字。你共有五次机会！</P>
            <input type="number" name="input" style="text-align: center" value="<?php echo @$_POST['input']?>">
            <input type="submit" name="sub" value="开始">
            <P><?php  echo @$info;?></P>
        </form>
    </body>
</html>