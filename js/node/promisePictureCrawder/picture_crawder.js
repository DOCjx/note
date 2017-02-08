var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('../stream/node_modules/request');
var baseUrl = 'https://pixabay.com/';
var path = './images';
var pictureNum = 10;

function getImgUrl(html){
	var $ = cheerio.load(html);
	var images = $('img');
	imgUrl = [];
	images.each(function(item){
		var src = $(this).attr('src');
		// console.log($(this).attr('src'));
		if ( item<=pictureNum ){
			// console.log(item);
			imgUrl.push(src);//baseUrl.substr(0,19)+
		}
	});
	return imgUrl;
}
function download(url, fileName){
	request.head(url, function(err, res2, body){
		// console.log(res2);
		request(url)
			.on('error',function(e){
				console.log(e);
			})
			.pipe(fs.createWriteStream(path + "/" + fileName));
		console.log(fileName+'下载完成！');
		if( err ){
			console.log(err);
		}
	});
}

function getPicture(url) {
	//对所有地址进行异步下载
	var fileName = Math.floor(Math.random()*100)+url.substr(-4,4);
	return new Promise(function(resolve, reject){
			download(url,fileName);
			resolve('正在下载...\n[ '+url+' ]');
			reject(fileName+'下载失败！');
	})
}

https
	.get(baseUrl, function(res){
		var html='';

		// res.setEncoding('utf8');
		res.on('data', function(data){
			html += data;


		})
		res.on('end',function(){
			var imgUrlArray = getImgUrl(html);
			//console.log(imgUrlArray);
			var urlEachArray = [];
			imgUrlArray.forEach(function(url){
				urlEachArray.push(getPicture(url));
			})
			Promise
				.all(urlEachArray)
				.then(function(ms){
					ms.forEach(function(info){
						console.log(info);
					})

				})
		})
	})
	.on('error',function(){
			console.log('连接页面失败！');
	})

