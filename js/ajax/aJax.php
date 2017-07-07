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
		((w) => {
			const getResult = () => {
				const request = new XMLHttpRequest();
				
				// console.log(keyword);
				// GET方法
				// var keyword = "./server/7.6.3.php?name="+ document.getElementById("keyword").value;
				// request.open("GET",keyword);
				// request.send();
				
				//request方法
				const data = "name="+document.getElementById("keyword").value;
				request.open("POST","./server/7.6.3.php");
				request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				request.send(data);
				
				request.onreadystatechange = () => {
					console.log(request.responseText);
					if( request.readyState===4 ){
						if( request.status===200 ){
							document.getElementById("result").innerHTML = request.responseText;
						} else {
							console.log("请求错误！"+request.status);
						}
					}
				}
			}
			document.getElementById("seach").onclick = getResult;
		})(window);
	</script>
</body>
</html>