<html>
<head>
	<style>
		span{
			position: absolute;
    		top: 100px;
		}
	</style>
</head>
    <body>
        <?php
            if( isset($_POST['sub']) ){
                if( $_POST['flag']==0 ){
                    $answer = $_POST['anwser'] = rand(1,10);
                    $_POST['have'] = 4;
                    $_POST['flag']=1;
                }
                if( $_POST['have']>=1 ){
                    if( $_POST['input']==$_POST['anwser'] ){
                    	$left = 5-@$_POST['have'];
                        echo '<span>you win!you used '.$left.' times.<br>input a number play again!</span>';
                        $_POST['flag']=0;
                    } elseif( $_POST['input']>$_POST['anwser'] ){
                        echo '<span>bigger!try again!<br>you can still try '.$_POST['have'].' times.</span>';
                    } elseif( $_POST['input']<$_POST['anwser'] ) {
                        echo '<span>smaller!try again!<br>you can still try '.$_POST['have'].' times.</span>';
                    }
                    $_POST['have']--;
                    // var_dump($_POST['anwser']);

                } else {
                    echo '<span>you faild!</span>';
                    $_POST['flag']=0;
                }
            }
        ?>
        <p>you can try five times.please input the number from 1 to 10!</P>
        <form method="post">
            <input type="number" name="input" value="<?php echo @$_POST['input'];?>">
            <input type="submit" name="sub" value="submit">
            <input type="hidden" name="anwser" value="<?php echo @$_POST['anwser'];?>">
            <input type="hidden" name="have" value="<?php echo @$_POST['have'];?>">
            <input type="hidden" name="flag" value="<?php empty($_POST['sub'])?$flag1=0:$flag1=@$_POST['flag'];echo $flag1;?>">
        </form>
        
    </body>
</html>