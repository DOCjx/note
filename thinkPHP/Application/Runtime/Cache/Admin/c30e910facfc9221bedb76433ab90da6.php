<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>编辑用户</title>
	<link href="/Fun/Public/assets/global/css/admin.css" rel="stylesheet" type="text/css"/>
</head>
<body>
	<nav>
		<img src="/Fun/Public/assets/global/img/logo.png" style="margin-left:10px;margin-top:2.5px;float:left;width:55px;height:55px;" alt="logo">
		<ul>
			<li><a href="<?php echo U('Home/Index/index');?>">首页</a></li>
			<li><?php if(empty(${flag})): ?><a href="#">管理用户</a><?php else: ?><a href="<?php echo U('Index/index');?>">管理用户</a><?php endif; ?></li>
		</ul>
		<div id="top">
			<font>欢迎你<?php echo ($userName); ?>!</font>
		</div>
	</nav>
	<form action="<?php echo U('Index/updataUser');?>" method="post">
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
			<tr>
				<td><?php echo ($userInfo['id']); ?></td>
				<td><input type="number" required="required" name="user_id" value="<?php echo ($userInfo['user_id']); ?>"></td>
				<td><input type="text" required="required" name="name" value="<?php echo ($userInfo['name']); ?>"></td>
				<td><input type="text" required="required" name="psw" value="<?php echo ($userInfo['psw']); ?>"></td>
				<td><input type="text" name="sex" value="<?php echo ($userInfo['sex']); ?>"></td>
				<td><input type="email" required="required" name="email" value="<?php echo ($userInfo['email']); ?>"></td>
				<td><?php echo (date('Y-m-d H:i',$userInfo['login_time'])); ?></td>
				<td><?php if(empty(${flag})): echo ($userInfo['status']); else: ?><input type="number" name="status" value="<?php echo ($userInfo['status']); ?>"  min="0" max="2" ><?php endif; ?></td>
				<td><input type="submit" value="确认修改"></td>
			</tr>
		</table>
		<input type="hidden" name="editUserId" value="<?php echo ($userInfo['id']); ?>">
	</form>
</body>
</html>