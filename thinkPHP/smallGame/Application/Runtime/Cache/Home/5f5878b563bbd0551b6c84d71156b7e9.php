<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>小游戏</title>
<link href="/abc/hongyi/Fun/Public/assets/global/css/home.css" rel="stylesheet" type="text/css"/>
</head>
<body>
	<div id="nav">
		<a href="#" style="float:left"><img src="/abc/hongyi/Fun/Public/assets/global/img/logo.png" style="margin:5px 0 0 17px;float:left;width:55px;height:55px;" alt="logo">
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
        <h1 style="height:50px;text-line:50px;"">游戏展示！</h1>
        <div id="content1">
        	<ul>
		        <li>
		        	<a href="<?php echo U('Index/game');?>">
		        		<img width="396px" height="213px" src="/abc/hongyi/Fun/Public/assets/global/img/game.png" alt="game">
		        		<span>
		        			<img width="720px" height="420px" src="/abc/hongyi/Fun/Public/assets/global/img/game.png" alt="game"><br>猜数字
		        		</span>
		        	</a>
		        </li>
		        <li>
			        <a href="<?php echo U('Index/game1');?>">
		        		<img width="396px" height="213px" src="/abc/hongyi/Fun/Public/assets/global/img/game1.png" alt="game1">
		        		<span>
		        			<img width="720px" height="420px" src="/abc/hongyi/Fun/Public/assets/global/img/game1.png" alt="game1"><br>心灵感应
		        		</span>
		        	</a>
		        </li>
		    </ul>
        </div>
    </div>

</body>
</html>