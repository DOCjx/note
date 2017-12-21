const fs = require('fs');
const request = require('request');

//获取号码的地址
const baseUrl = 'https://wt.tmall.com/trade/detail/itemOp.do?itemId=555335457485&skuId=0&provId=110000&cityId=110100&planId=28891&maxCount=40&versionCode=0%4010%402&_ksTS=1513690883628_1884&m=SelectNum';
let phoneNums = [];
let flag = 1;
const percent = {
    finished: 0,
    sum: 0,
};

//实现的号码匹配模式
const ruler = [
    {
        'name': '8有3个以上',
        filterCb(item){
            const numArr = item.match(/([8]{1})/g);
            return numArr && numArr.length > 3;
        }
    },{
        'name': '匹配6位顺增或顺降',
        filterCb(item){
            return /(?:(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){5}|(?:9(?=8)|8(?=7)|7(?=6)|6(?=5)|5(?=4)|4(?=3)|3(?=2)|2(?=1)|1(?=0)){5})\d/.test(item);
        }
    },{
        'name': '匹配4到9位连续的数字',
        filterCb(item){
            return /(?:(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){3,}|(?:9(?=8)|8(?=7)|7(?=6)|6(?=5)|5(?=4)|4(?=3)|3(?=2)|2(?=1)|1(?=0)){3,})\d/.test(item);
        }
    },{
        'name': '匹配3位以上的重复数字',
        filterCb(item){
            return /([\d])\1{2,}/.test(item);
        }
    },{
        'name': '匹配日期类型的数字',
        filterCb(item){
            return /(19|20)[\d]{2}(1[0-2]|0?[1-9])(31|2[0-9]|1[0-9]|0?[0-9])/.test(item);
        }
    },{
        'name': '匹配33111类型的',
        filterCb(item){
            return /([\d])\1{1,}([\d])\2{2,}/.test(item);
        }
    },{
        'name': '匹配5331533类型的',
        filterCb(item){
            return /(([\d]){1,}([\d]){1,})\1{1,}/.test(item);
        }
    },{
        'name': '匹配22334和123355类型的',
        filterCb(item){
            return /([\d])\1{1,}([\d])\2{1,}/.test(item);
        }
    },{
        'name': '退出程序',
    },
];
    // {
    //     'name': 'ABC ABAB AABB',
    //     filterCb(item){
    //     }
    // },{
    //     'name': 'XXX XXAA XXBB',
    //     filterCb(item){
    //     }
    // },
//发送请求得到号码
const getProArr = i => {
    return new Promise((resolve, reject) => {
        const url = baseUrl + `&callback=cb${i}`;
        let backData = '';
        setTimeout(()=>{
            request(url)
                .on('data', data => {
                    backData += data;
                })
                .on('error', e => {
                    reject(e);
                })
                .on('end', res => {
                    percent.finished++;
                    const phoneNow = backData.match(/([\d]{11})/g);
                    phoneNums = [...phoneNums, ...phoneNow];
                    phoneNums = [...(new Set(phoneNums))];
                    const percentNow = parseInt((percent.finished / percent.sum) * 100);
                    process.stdout.write(`\b\b\b${percentNow}%`);
                    resolve(`\n${i}.json获取完成！${phoneNow.length}个`);
                });
        }, i * 800);
    });
};
//打印可以匹配的模式
const printMemu = () => {
    process.stdout.write('\n++++++++如下号码类型++++++++\n');
    ruler.forEach((v, i, arr) => {
        process.stdout.write(`     ${i}: ${v.name}\n`);
    });
    process.stdout.write('++++++++++++++++++++++++++++\n');
    process.stdout.write('请选择你想要的号码类型编号：');
};
//找到满足要求的号码
const findPhones = type => {
    type == ruler.length - 1 && process.exit();
    let mode = 0;
    if(type < ruler.length && type > 0) {
        mode = type;
    }
    process.stdout.write('找到以下号码:\n');
    for(let v of phoneNums.filter(ruler[mode].filterCb)){
        process.stdout.write(v + '\n');
    }
};
//所有的号码分类存盘
const write2File = () => {
    const category = [];
    let categoryStr = '';

    for(let v of phoneNums){
        for(let i in ruler){
            if(i == ruler.length - 1) break;
            if(!!ruler[i].filterCb(v)){
                if(!!category[i]){
                    category[i] += `    ${v}\n`;
                }else{
                    category[i] = `${ruler[i].name}:\n    ${v}\n`;
                }
            }
        }
    }
    for(let v of category){
        if(!!v) categoryStr += v;
    }
    categoryStr += `\n++++++++++++++++所有号码++++++++++++++++\n`;
    fs.writeFile(`./data.txt`, categoryStr, err => {
        err && process.exit();
    });
    fs.appendFile(`./data.txt`, phoneNums.map(item => '\n    ' + item), err => {
        err && process.exit();
    });
};
//获取号码
const getPhoneNums = n => {
    const getPhones = [];
    flag++;
    percent.sum = n;
    for(let i = 0; i < n; i++){
        getPhones.push(getProArr(i));
    }
    process.stdout.write(`已完成  0%`);
    Promise
        .all(getPhones)
        .then(ms => {
            process.stdout.write(` 共获取号码${phoneNums.length}个`);
            phoneNums = phoneNums.sort();

            write2File();

            printMemu();
            const chunk = process.stdin.read();
            !!chunk && findPhones(type = +chunk > 0 ? +chunk : 0);
        })
        .catch(e => {
            process.stdout.write('获取失败：\n');
            process.stdout.write(e);
            process.exit();
        });
};

process.stdin.setEncoding('utf8');
process.stdout.write('请输入刷新次数：');
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(!!chunk && flag != 1){
        findPhones(type = +chunk > 0 ? +chunk : 0);
        printMemu();
    }else if(!!chunk && flag == 1){
        getPhoneNums(n = +chunk > 0 ? +chunk : 1);
    }
});
