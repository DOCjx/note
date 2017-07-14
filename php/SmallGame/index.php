<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
    <title>石头，剪刀，布</title>
    <meta name="Keywords" content="石头，剪刀，布，小游戏" />
    <meta name="Description" content="石头，剪刀，布，小游戏" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">

    <!-- css start -->
    <link rel="stylesheet" type="text/css" href="./css/cont.css">
    <!-- css end -->
</head>
<body>
    <div class="contair">
        <form action="" method="post">
            <div class="haeder">剪刀，石头，布小游戏</div>
            <div class="content">
                <div class="content-head">请选择：</div>
                <input type="radio" name="fun" value="1"><img src="./images/1.jpg">
                <input type="radio" name="fun" value="2"><img src="./images/2.jpg">
                <input type="radio" name="fun" value="3"><img src="./images/3.jpg">
                <div class="result">
                    <?php   //第一件事：写php,判断提交了没有？
                        if(isset($_POST['sub'])){    //$_POST['name']用于取表单的数据，isset()函数判断值是否存在

                            //第二件事：判断玩家是否选择了？
                            if(!isset($_POST['fun'])) echo '未选择！';  //防止提交没有选择
                            else {

                                //第二件事：把玩家选择的显示出来
                                $user = $_POST['fun'];    //把玩家选择的表单值拿出来，赋给变量$user
                                echo '<div class="vs-top">玩家选了:<span class="vs-ttip">电脑选了:</span></div>';
                                //echo是php的输出函数，直接将里面的东西输出给html，然后浏览器再将它们和html一起解析
                                echo '<img src="./images/'.$user.'.jpg">'; //将玩家显示的图片给html，通过变量$user与图片进行动态联系
                                echo '<span class="vs-stip">vs</span>';   //php可以嵌入html标签

                                //第一件事：电脑随机选择，并将电脑选择的显示出来    
                                $computer = mt_rand(1,3);   //用随机函数mt_rand()其1到3之间的随机数赋给$computer
                                echo '<img src="./images/'.$computer.'.jpg">';  //把电脑选择的图片输出来

                                //第五件事：用php代码解释游戏规则与细节，并的出结果
                                $cnum = $user-$computer;  //通过玩家选择的与电脑选择的值得差来判断游戏输赢
                                switch ($cnum) {    //利用switch来解释该游戏规则与输赢
                                    case 0: echo '<p>打平啦</p>';break;  //在html输出来
                                    case 1: case -2: echo '<p style="color:green">你赢啦</p>';break;
                                    case 2: case -1: echo '<p style="color:#333">电脑赢啦</p>';break;        
                                }  
                            }
                        }
                    ?>
                </div>
            </div>
            <div class="footer">
                <div class="footer-button">
                    <input type="submit" name="sub" id="sub" value="开始游戏">
                </div>    
            </div>
        </form>    
    </div>
</body>
</html>
