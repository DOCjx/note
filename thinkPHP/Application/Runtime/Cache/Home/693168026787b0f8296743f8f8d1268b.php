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
        <h1>猜数字的游戏记录：</h1>
    	<div id="content">
			<table>
				<tr class="first">
					<td>游戏名称</td>
					<td>上一次游戏时间</td>
					<td>尝试次数</td>
					<td>游戏结果</td>
				</tr>
				<?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$dataDetial): $mod = ($i % 2 );++$i;?><tr>
						<td><?php echo ($dataDetial['game_name']); ?></td>
						<td><?php echo (date('Y-m-d H:i:s',$dataDetial['updata_time'])); ?></td>
						<td><?php echo ($dataDetial['times']); ?></td>
						<td><?php echo ($dataDetial['result']); ?></td>
					</tr><?php endforeach; endif; else: echo "" ;endif; ?>
			</table>
		</div>
		<div id="footer1">
		    <span><?php echo ($page); ?></span>
		</div>
    </div>
    <div id="background">
        <h1>心灵感应的游戏记录：</h1>
    	<div id="content">
			<table>
				<tr class="first">
					<td>游戏名称</td>
					<td>上一次游戏时间</td>
					<td>你想的数字</td>
				</tr>
				<?php if(is_array($data1)): $i = 0; $__LIST__ = $data1;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$dataDetial1): $mod = ($i % 2 );++$i;?><tr>
						<td><?php echo ($dataDetial1['game_name']); ?></td>
						<td><?php echo (date('Y-m-d H:i:s',$dataDetial1['updata_time'])); ?></td>
						<td><?php echo ($dataDetial1['result']); ?></td>
					</tr><?php endforeach; endif; else: echo "" ;endif; ?>
			</table>
		</div>
		<div id="footer1">
		    <span><?php echo ($page1); ?></span>
		</div>
    </div>

</body>
</html>