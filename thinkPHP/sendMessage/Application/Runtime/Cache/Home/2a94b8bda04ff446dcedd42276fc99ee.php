<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link href="/abc/Homyit/sendMessage/Public/assets/bootstrap-3.3.5/css/bootstrap.css" rel="stylesheet" type="text/css"/>
	<link href="/abc/Homyit/sendMessage/Public/assets/globle/css/main.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript" src="/abc/Homyit/sendMessage/Public/assets/jQuery/jquery-3.0.0.js"></script>
	<script type="text/javascript" src="/abc/Homyit/sendMessage/Public/assets/bootstrap-3.3.5/js/bootstrap.js"></script>
</head>
<body>
	<div class="container">
		<form action="<?php echo U('Index/send');?>" method="post" accept-charset="utf-8" class="row">
			<table class="table col-md-4">
				<tr class="first">
					<td></td>
					<td>学号</td>
					<td>姓名</td>
					<td>性别</td>
					<td>班级</td>
					<td>手机号</td>
					<td>QQ号</td>
					<td>发送状态</td>
					<td>状态</td>
				</tr>
				<?php if(is_array($users)): $i = 0; $__LIST__ = $users;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$dataDetial): $mod = ($i % 2 );++$i;?><tr>
						<td>
							<input type="checkbox" id="checkbox" name="userId[]" class="checkboxs" value="<?php echo ($dataDetial['id']); ?>">
						</td>
						<td><?php echo ($dataDetial['sno']); ?></td>
						<td><?php echo ($dataDetial['name']); ?></td>
						<td><?php echo ($dataDetial['sex']); ?></td>
						<td><?php echo ($dataDetial['class']); ?></td>
						<td><?php echo ($dataDetial['phone']); ?></td>
						<td><?php echo ($dataDetial['QQ']); ?></td>
						<td><?php echo ($dataDetial['mail']); ?></td>
						<td><?php echo ($dataDetial['status']); ?></td>
					</tr><?php endforeach; endif; else: echo "" ;endif; ?>
			</table>
			<button type="button" class="btn btn-default all">全选</button>
			<button type="button" class="btn btn-default unall">全不选</button>
			<button type="button" class="btn btn-default others">反选</button>
			<input type="submit" name="sub" class="btn btn-default" value="发送">
		</form>
	</div>
	<script type="text/javascript">
		$(function (){
			var checkboxs = $("input[type='checkbox']");
			$(".all").click(()=> {
                checkboxs.prop("checked",true); 
            });
            $(".unall").click(()=> {
                checkboxs.prop("checked",false); 
            });
            $('.others').click(()=>{
		        checkboxs.prop("checked", function(index, attr){
		            return !attr;
		        });
		    });
		});
	</script>
</body>
</html>