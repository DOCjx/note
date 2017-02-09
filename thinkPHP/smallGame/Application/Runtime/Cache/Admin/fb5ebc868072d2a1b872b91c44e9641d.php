<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>修改记录</title>
	<link href="/Fun/Public/assets/global/css/admin.css" rel="stylesheet" type="text/css"/>
</head>
<body>
	<nav>
		<img src="/Fun/Public/assets/global/img/logo.png" style="margin-left:10px;margin-top:2.5px;float:left;width:55px;height:55px;" alt="logo">
		<ul>
			<li><a href="<?php echo U('Home/Index/index');?>">首页</a></li>
			<li><a href="<?php echo U('Index/index');?>">管理用户</a></li>
		</ul>
		<div id="top">
			<font>欢迎你<?php echo ($userName); ?>!</font>
		</div>
	</nav>
	<table>
	    <tr class="first">
	    	<td>游戏名称</td>
	    	<td>时间</td>
	    	<td>结果</td>
	    	<td>次数</td>
	    	<td>状态</td>
	    	<td>操作</td>
	    </tr>
		<?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$dataDetail): $mod = ($i % 2 );++$i;?><tr>
				<td><?php echo ($dataDetail['game_name']); ?></td>
				<td><?php echo (date('Y-m-d H:i',$dataDetail['updata_time'])); ?></td>
				<td><?php echo ($dataDetail['result']); ?></td>
				<td><?php echo ($dataDetail['times']); ?></td>
				<td><?php echo ($dataDetail['status']); ?></td>
				<td>
					<a href="<?php echo U('Index/doData',array('id'=>$dataDetail['id'],'status'=>'0'));?>"><span style="">删除</span></a>
					<a href="<?php echo U('Index/doData',array('id'=>$dataDetail['id'],'status'=>'1'));?>"><span style="">恢复</span></a>
					<a href="<?php echo U('Index/doData',array('id'=>$dataDetail['id'],'status'=>'-1'));?>"><span style="">彻底删除</span></a>
				</td>
			</tr><?php endforeach; endif; else: echo "" ;endif; ?>
	</table>
	<div id="footer"><?php echo ($page); ?></div>
</body>
</html>