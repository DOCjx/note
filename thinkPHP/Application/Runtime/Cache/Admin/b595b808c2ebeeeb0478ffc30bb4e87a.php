<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>管理用户</title>
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
				<td><a href="<?php echo U('Index/detail',array('editDataId'=>$userInfoDetail['user_id'],'flag'=>'1'));?>"><?php echo ($userInfoDetail['user_id']); ?></a></td>
				<td><?php echo ($userInfoDetail['name']); ?></td>
				<td><?php echo ($userInfoDetail['psw']); ?></td>
				<td><?php echo ($userInfoDetail['sex']); ?></td>
				<td><?php echo ($userInfoDetail['email']); ?></td>
				<td><?php echo (date('Y-m-d H:i',$userInfoDetail['login_time'])); ?></td>
				<td><?php echo ($userInfoDetail['status']); ?></td>
				<td><a href="<?php echo U('Index/editUser',array('editUserId'=>$userInfoDetail['id'],'flag'=>'1'));?>">修改&nbsp;&nbsp;</a><a href="<?php echo U('Index/delUser',array('editUserId'=>$userInfoDetail['id'],'flag'=>'1'));?>">删除</a></td>
			</tr><?php endforeach; endif; else: echo "" ;endif; ?>
		<form action="addUser" method="post">
			<tr>
				<td><input type="number"  required="required" name="id" "></td>
				<td><input type="number" required="required" name="user_id" "></td>
				<td><input type="text" required="required" name="name" "></td>
				<td><input type="text" required="required" name="psw" "></td>
				<td>
					<select name="sex">
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
				</td>
				<td><input type="email" required="required" name="email" "></td>
				<td></td>
				<td><input type="number" name="status" min="0" max="2" "></td>
				<td><input type="submit" value="增加用户"></td>
			</tr>
		</form>
	</table>
</body>
</html>