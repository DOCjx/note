var http = require('http');
var request = require("./node_modules/request");
var fs = require('fs');

var download = function(url, dir, filename){
    request.head(url, function(err, res, body){
        // console.log(body);
        request(url).pipe(fs.createWriteStream(dir + "/" + filename));
    });
};
function getPageAsync(url) {
    // console.log(url+'aaa');
    return new Promise(function(resolve, reject){
        console.log('正在更新....');
        //download(url,'./data',url.substr(url.lastIndexOf('/'),url.length))
        http
            .get(url, function(res){
                var html='';

                // res.setEncoding('utf8');
                res.on('data', function(data){
                    html += data;
                    // console.log(Buffer.isBuffer(data));
                })
                res.on('end',function(){
                    // html.toString('utf8');
                    console.log(html.pipe(fs.createWriteStream("./data" + "/" + "aaa")));
                })
            })
            .on('error',function(){
                    console.log('获取失败！');
                })
    })
}
var fetchArray = [];
var urls = ["http://www.pm25.in/api/querys/all_cities.json","http://www.pm25.in/api/querys/aqi_ranking.json"];

urls.forEach(function(id){
    fetchArray.push(getPageAsync(id));
})
Promise
    .all(fetchArray)
    .then(
        console.log('complete!')
    )