<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ajax</title>
	<style type="text/css">
		table,td,th{
			border: 1px solid blue;
		}
	</style>
</head>
<body>
	<input type="text" id="keyword">
	<button id="seach">查找</button>
	<div id="result"></div>
	<script>
		//跨域问题解决办法
		//http://www.cnblogs.com/2050/p/3191744.html
		window.onload=function(){
				document.getElementById("seach").onclick = function(){
					var request = new XMLHttpRequest();
					
					// console.log(keyword);
					// GET方法
					// var keyword = "7.6.3.php?name="+ document.getElementById("keyword").value;
					// request.open("GET",keyword);
					// request.send();
					
					//request方法
					var data = "name="+document.getElementById("keyword").value;
					request.open("POST","7.6.3.php");
					request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
					request.send(data);
					
					request.onreadystatechange = function(){
						console.log(request.responseText);
						if( request.readyState===4 ){
							if( request.status===200 ){
								document.getElementById("result").innerHTML = request.responseText;
							} else {
								alert("请求错误！"+request.status);
							}
						}
					}
				}
		}
	</script>
</body>
</html>