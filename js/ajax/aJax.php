<!DOCTYPE html>
<html lang="en">
<head id="head">
	<meta charset="UTF-8">
	<title>ajax</title>
	<style type="text/css">
		table,td,th{
			border: 1px solid blue;
		}
	</style>
</head>
<body id="body">
	<input type="text" id="keyword">
	<button id="seach">查找</button>
	<div id="result"></div>
	<script>
		((w) => {
			const getResultXHR = () => {
				const request = new XMLHttpRequest();
				
				// console.log(keyword);
				// GET方法
				// var keyword = "./7.6.3.php?name="+ document.getElementById("keyword").value;
				// request.open("GET",keyword);
				// request.send();
				
				//request方法
				const data = "name="+document.getElementById("keyword").value;
				request.open("POST","http://127.0.0.1/note/js/ajax");//http://127.0.0.1/note/js/ajax./7.6.3.php
				request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				request.send(data);
				
				request.onreadystatechange = () => {
					// 	console.log(request.responseText);
					if( request.readyState===4 ){
						if( request.status===200 ){
							document.getElementById("result").innerHTML = request.responseText;
						} else {
							console.log("请求错误！"+request.status);
						}
					}
				}
			}
			const creatScript = (() => {
				let _instance = null;
				const creatTag = () => {
					return {
						el: "body",
						src: window.location.href,
						creatTagEl: function() {
							const cb = 
							"function getdata(res){let Id=res.ID;let Name=res.Name;"
							+"		let htmlTpl = "
							+"		'<table>'"
							+"		+'	<tr>'"
							+"		+'		<th>姓名：</th>'"
							+"		+'		<th>学号：</th>'"
							+"		+'	</tr>'"
							+"		+'	<tr>'"
							+"		+'		<td>'+Id+'</td>'"
							+"		+'		<td>'+Name+'</td>'"
							+"		+'	</tr>'"
							+"		+'</table>';"
							+"		if(!res) {"
							+"      	htmlTpl = '未查询到数据！';"
							+"      }"
							+"		document.getElementById('result').innerHTML = htmlTpl;"
							+"}";
							const rootDom = document.getElementById(this.el);
							const newScript = document.createElement('script');
							newScript.type = 'text/javascript';
							newScript.innerHTML = cb;
							rootDom.appendChild(newScript);
						},
						getDataJsonP: function() {
							const rootDom = document.getElementById(this.el);
							const newScript = document.createElement('script');
							const name = document.getElementById("keyword").value;
							newScript.src = this.src + '?callback=getdata&action=jsonp&name='+name;
							rootDom.appendChild(newScript);
							const scriptTags = document.getElementsByTagName('script');
							rootDom.removeChild(scriptTags[scriptTags.length-1]);
						}
					}
					
				}
				return () => {
					if( !_instance ){
						_instance = creatTag();
					}
					return _instance;
				}
			})();
			//向页面添加script和功能函数
			// creatScript().el = 'head';//可以覆盖默认配置
			creatScript().creatTagEl();
			document.getElementById("seach").onclick = () => {
				creatScript().src = "http://127.0.0.1/note/js/ajax/7.6.3.php";//可以覆盖默认配置
				creatScript().getDataJsonP();
			}
		})(window);
	</script>
</body>
</html>
