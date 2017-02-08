<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>管理</title>
	<link href="/Telepathy/Public/assets/global/css/admin.css" rel="stylesheet" type="text/css"/>
</head>
<body>
	<nav>
		<img src="/Telepathy/Public/assets/global/img/logo.png" style="margin-left:10px;margin-top:2.5px;float:left;width:55px;height:55px;" alt="logo">
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
	    	<td>账户ID</td>
	    	<td>账号</td>
	    	<td>昵称</td>
	    	<td>密码</td>
	    	<td>性别</td>
	    	<td>邮箱</td>
	    	<td>注册时间</td>
	    	<td>权限</td>
	    	<td>操作</td>
	    </tr>
		<?php if(is_array($userInfo)): $i = 0; $__LIST__ = $userInfo;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$userInfoDetail): $mod = ($i % 2 );++$i;?><tr>
				<td><?php echo ($userInfoDetail['id']); ?></td>
				<td><?php echo ($userInfoDetail['user_id']); ?></td>
				<td><?php echo ($userInfoDetail['name']); ?></td>
				<td><?php echo ($userInfoDetail['psw']); ?></td>
				<td><?php echo ($userInfoDetail['sex']); ?></td>
				<td><?php echo ($userInfoDetail['email']); ?></td>
				<td><?php echo (date('Y-m-d',$userInfoDetail['login_time'])); ?></td>
				<td><?php echo ($userInfoDetail['status']); ?></td>
				<td><a href="<?php echo U('Index/editUser',array('editUserId'=>$userInfoDetail['id']));?>">修改</a></td>
			</tr><?php endforeach; endif; else: echo "" ;endif; ?>
	</table>
</body>
</html>