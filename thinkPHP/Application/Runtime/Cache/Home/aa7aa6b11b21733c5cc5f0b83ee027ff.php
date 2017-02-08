<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>小游戏</title>
<link href="/abc/Homyit/Fun/Public/assets/global/css/home.css" rel="stylesheet" type="text/css"/>
</head>
<body>
	<div id="nav">
		<a href="#" style="float:left"><img src="/abc/Homyit/Fun/Public/assets/global/img/logo.png" style="margin:5px 0 0 17px;float:left;width:55px;height:55px;" alt="logo">
			<div id="talk">
				<ul>
					<h3 style="text-algin:center">最新评论</h3>
					<?php if(is_array($talk)): $i = 0; $__LIST__ = $talk;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li>
							<div>
								<span>玩家：<?php echo ($vo['name']); ?></span>
							</div>
								<?php echo ($vo['content']); ?>
							<div>
								<?php echo (date('Y-m-d H:i:s',$vo['upload_time'])); ?>
							</div>
						</li><?php endforeach; endif; else: echo "" ;endif; ?>
				</ul>
				<div id="talkfooter">
					<form action="<?php echo U('Index/addTalk');?>">
						<textarea name="content">做一个乐于分享的好孩纸！
						</textarea>
						<input type="submit">
					</form>
				</div>
			</div>
		</a>
	</div>
	<div class="nav">
		<ul>
			<?php if(is_array($nav)): $i = 0; $__LIST__ = $nav;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(empty($vo['c'])): ?><li><a href="<?php echo U('Index/category',array('id'=>$vo['id']));?>"><?php echo ($vo['name']); ?></a></li>
				<?php else: ?>
					<li>
						<a href="#"><?php echo ($vo['name']); ?></a>
						<div id="outUl">
							<ul>
								<?php if(is_array($vo['c'])): $i = 0; $__LIST__ = $vo['c'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$ch): $mod = ($i % 2 );++$i;?><li><a href="<?php echo U('Index/category',array('id'=>$ch['id']));?>"><?php echo ($ch['name']); ?></a>
									</li><?php endforeach; endif; else: echo "" ;endif; ?>
							</ul>
						</div>
					</li><?php endif; endforeach; endif; else: echo "" ;endif; ?>
		</ul>
		<div class="top">
				<a href="<?php echo U('Index/userLogin');?>">登入</a>
				<a href="<?php echo U('Index/logout');?>">注销</a>
		</div>
	</div>
	
    <div id="background">
        <?php if(empty($session)): ?><h1>请先登入哦！</h1>
		    <form method="post" action="<?php echo U('Index/login');?>">
		    	<div id="content">
		        	<div class="card1">
		           		<p>账号：<input type="text" name="user_id" required="required"></p>
		            	<p>密码：<input type="password" name="psw" required="required"></p>
		        	</div>
		    	</div>
		    	<div id="result">
		        	<span>还没账号<a style="text-decoration:none;" href="<?php echo U('Index/addUser');?>">注册</a></span>
		    	</div>
		    	<div id="footer">
		        	<input type="submit" value="登入" id="sub" name="sub">
		    	</div>
		    </form>
        <?php else: ?>
        	<h1>你已经登入！</h1>
	        <form action="">
		    	<div id="content">
	        	<div class="card1" style="width:300px;">
					<p><font style="color:green;font-size:18px;"><?php echo ($userName); ?>欢迎你！可以开始游戏了！</font></p>
					<p><a style="font-size:18px;text-decoration: none;" href="<?php echo U('Admin/Index/editUser',array('editUserId'=>$_SESSION['id']));?>">修改信息</a></p>
	        	</div>
	        	</div>
	        </form><?php endif; ?>
    </div>

</body>
</html>