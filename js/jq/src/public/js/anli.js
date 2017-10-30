define(function(require,exports,moudle){
    exports.gonggao = function(){
        var area = document.getElementById("gdong");
        var con1 = document.getElementById('con1');
        var con2 = document.getElementById('con2');
        var tup = document.getElementById('tup');
        var tdown = document.getElementById('tdown');
        con2.innerHTML = con1.innerHTML;
        var itheight = 40;
        area.scrollTop = 0;
        var set1;
        var speed = 50;
        var time2 = 6000;
        area.scrollTop = 0;
        var MyMar;

        function start(){
            clearInterval(MyMar);
            clearTimeout(set1);
            area.scrollTop +=2;
            MyMar = setInterval(abcd, speed);
            clearInterval(MyMar-1);
        }

        function abcd(){

            if(area.scrollTop % itheight == 0){
                clearInterval(MyMar);
                setTimeout(start, time2);
            }else{
                area.scrollTop +=2;
                if (area.scrollTop >= con1.scrollHeight){
                    area.scrollTop = 0;
                }
            }
        }
        setTimeout(start, time2);

        tup.onclick = function() {
            clearInterval(MyMar);

            start();

            //瞬变效果
            /*setTimeout(function (){
             area.scrollTop = Math.floor((area.scrollTop / itheight + 1))*itheight;
             },1);*/
        }

        tdown.onclick = function() {
            clearTimeout(set1);clearInterval(q);clearInterval(q - 1);
            clearInterval(MyMar - 1);
            clearInterval(MyMar);
            var dh = area.scrollTop;
            var downh;
            if (dh == 0) {
                area.scrollTop = con1.scrollHeight;
            }
            if (dh % itheight == 0 || dh == 0) {

                downh = itheight;
            }else{
                downh = dh % itheight;
            }
            function dp(){
                area.scrollTop -=3.9;
            }
            var q = setInterval(dp, 60);
            setTimeout(function (){clearInterval(q);clearInterval(q - 1);}, downh*16);
            //  console.log(downh);
            set1 = setTimeout(start, 7000);

            //start();

            //瞬变效果
            /*var height = Math.ceil(((area.scrollTop - itheight) / itheight))*itheight;
             if (height) {
             area.scrollTop = height;
             }else{
             area.scrollTop = con1.scrollHeight;
             }*/
        }

    }
    exports.main = function(){
        $(document).ready(function(){
            var w = $('.picrow li').width();
            var juli = -385;
            var index = $('.picrow li').size();
            var count = $('.picrow li').size();
            var i = 0;
            // console.log(index);
            if(index>3)
            {
                $('.right').on('click',function(event){
                    $('.picrow li').animate({left:juli +'px'});
                    index--;
                    i++;
                    juli = juli-385;
                    if(index == 3){
                        $('.right').css({'display':'none'});
                        juli=juli+385;

                    }
                })
            }else{
                $('.left,.right').css({"display":"none"});
            }
            $('.left').on('click',function(){
                if(count>index){
                    var left1 = $('.picrow li').css('left');
                    left1= parseInt(left1);
                    //  console.log(left1);
                    left1=left1+385;
                    //  console.log(left1);
                    $('.picrow li').animate({left:left1+'px'});
                    $('.right').css({'display':'block'});
                    index++;
                    if(index==count){
                        juli=-385;
                    }
                }
            })
        })
        $('.dianzi').on('click',function(e){
            e.preventDefault();

            $('.dianzi').addClass('active');
            $('.bangong').removeClass('active');
            $('.menhu').removeClass('active');

        })
        $('.bangong').on('click',function(e){
            e.preventDefault();
            $('.bangong').addClass('active');
            $('.dianzi').removeClass('active');
            $('.menhu').removeClass('active');

        })
        $('.menhu').on('click',function(e){
            e.preventDefault();
            $('.menhu').addClass('active');
            $('.dianzi').removeClass('active');
            $('.bangong').removeClass('active');

        })
    }
    exports.shenghuo = function() {
        /*   var h1 = "319px";
         var h2 = "638px";
         var h3 = "957px";

         $(document).ready(function(){
         $('.item1').on('click',function(){
         $('.art-content').animate({bottom:'0'},100,function(event){

         })
         $('.art-content-hidden1').animate({bottom:'0'},100,function(event){

         })
         $('.art-content-hidden2').animate({bottom:h1},100,function(event){

         })
         $('.art-content-hidden3').animate({bottom:h2},100,function(event){

         })
         var active = $(this).parent().hasClass('active');
         if(active){

         }else{
         $('.item1').parent().addClass('active');
         $('.item2,.item3,.item4').parent().removeClass('active');
         $(this).siblings().children('a').removeClass('font-active');
         $(this).children('a').addClass('font-active');
         $('.art-menu .item1').addClass('border-active');
         $('.art-menu .item1').siblings().removeClass('border-active');
         }
         })
         $('.item2').on('click',function(){

         $(this).children('a').addClass('font-active');

         $('.item1').children('a').removeClass('font-active');
         $('.art-content').animate({bottom:h1},100,function(event){

         });
         $('.art-content-hidden1').animate({bottom:h1},100,function(event){

         })
         $('.art-content-hidden2').animate({bottom:h1},100,function(event){

         })
         $('.art-content-hidden3').animate({bottom:h2},100,function(event){

         })
         var active = $(this).parent().hasClass('active');
         if(active){

         }else{
         $('.item2').parent().addClass('active');
         $('.item1,.item3,.item4').parent().removeClass('active');
         $(this).siblings().children('a').removeClass('font-active');
         $(this).children('a').addClass('font-active');
         $('.art-menu .item2').addClass('border-active');
         $('.art-menu .item2').siblings().removeClass('border-active');
         }


         })
         $('.item3').on('click',function(){

         $('.art-content-hidden2').animate({bottom:h2},100,function(event){

         })
         $('.art-content').animate({bottom:h1},100,function(event){

         })

         $('.art-content-hidden1').animate({bottom:h2},100,function(event){

         })
         $('.art-content-hidden3').animate({bottom:h2},100,function(event){

         })
         var active = $(this).parent().hasClass('active');
         if(active){

         }else{
         $('.item3').parent().addClass('active');
         $('.item1,.item2,.item4').parent().removeClass('active');
         $(this).siblings().children('a').removeClass('font-active');
         $(this).children('a').addClass('font-active');
         $('.art-menu .item3').addClass('border-active');
         $('.art-menu .item3').siblings().removeClass('border-active');
         }

         })
         $('.item4').on('click',function(){
         $('.art-content').animate({bottom:h1},100,function(event){

         })
         $('.art-content-hidden1').animate({bottom:h2},100,function(event){

         })
         $('.art-content-hidden2').animate({bottom:h3},100,function(event){

         })
         $('.art-content-hidden3').animate({bottom:h3},100,function(event){

         })
         var active = $(this).parent().hasClass('active');
         if(active){

         }else{
         $('.item4').parent().addClass('active');
         $('.item1,.item2,.item3').parent().removeClass('active');
         $(this).siblings().children('a').removeClass('font-active');
         $(this).children('a').addClass('font-active');
         $('.art-menu .item4').addClass('border-active');
         $('.art-menu .item4').siblings().removeClass('border-active');

         }

         })
         })
         */
        $(document).ready(function(){
            $('.nav li:first-child').addClass('active');
            $('.nav li').on('click',function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            })
            var url = window.location.hash;
            console.log(url);
        })
    }
    exports.member = function(){
        /**
         * Created by 彭宸 on 2016/7/24.
         */
        $(document).ready(function(){


            var imgData = {"img":[
                {"src":"/public/images/member_images/王宏凯.jpg", "srcs":"/public/images/member_images/王宏凯s.jpg", "content": "<p>王宏凯:男，江西师范大学计算机信息工程学院12级卓越工程师班学生，宏奕工作室创始人兼boss，灵魂级人物，现供职百度，任网页前端开发工程师，年薪20w+</p><p>个人格言：敢梦就要敢当，敢想就要敢做，勇敢追求，踏踏实实努力。</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-王宏凯", "id":"1"},
                // {"src":"/public/images/member_images/罗强.jpg", "srcs":"/public/images/member_images/罗强s.jpg", "content": "<p>罗强: 男，江西师范大学计算机信息工程学院12级卓越工程师班学生，宏奕工作室创始人之一，现供职360，任网页前端开发工程师，年薪20w+</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-罗强", "id":"30"},
                {"src":"/public/images/member_images/高玉花.jpg", "srcs":"/public/images/member_images/高玉花s.jpg", "content": "<p>测试数据</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-高玉花", "id":"2"},
                {"src":"/public/images/member_images/罗凤丹.jpg", "srcs":"/public/images/member_images/罗凤丹s.jpg", "content": "<p>测试数据</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-罗凤丹", "id":"3"},
                {"src":"/public/images/member_images/刘亮.jpg", "srcs":"/public/images/member_images/刘亮s.jpg", "content": "<p>测试数据</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-刘亮", "id":"4"},
                // {"src":"/public/images/member_images/李晓科.jpg", "srcs":"/public/images/member_images/李晓科s.jpg", "content": "<p>测试数据</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-李晓科", "id":"31"},
                {"src":"/public/images/member_images/吕金秀.jpg", "srcs":"/public/images/member_images/吕金秀s.jpg", "content": "<p>测试数据</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-吕金秀", "id":"5"},
                // {"src":"/public/images/member_images/余荣攀.jpg", "srcs":"/public/images/member_images/余荣攀s.jpg", "content": "<p>测试数据</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-余荣攀", "id":"32"},
                {"src":"/public/images/member_images/陈浩宇.jpg", "srcs":"/public/images/member_images/陈浩宇s.jpg", "content": "<p>测试数据</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-陈浩宇", "id":"6"},
                {"src":"/public/images/member_images/刘少宇.jpg", "srcs":"/public/images/member_images/刘少宇s.jpg", "content": "<p>测试数据</p>", "href":"javascript:","alt":"test", "grade":"2012", "title":"12-刘少宇", "id":"7"},
                {"src":"/public/images/member_images/张敏.jpg","srcs":"/public/images/member_images/张敏s.jpg", "content": "<p>张敏：女，江西师范大学计算机信息工程学院13级网工二班，宏奕工作室13级boss，现坐标北京，任网页前端开发工程师</p><p>个人格言：我们不仅要有敢于竞争的豪气，还要有善于转化的智慧，这样才能追求卓越</p>", "href":"javascript:", "alt":"test", "grade":"2013", "title":"13-张敏", "id":"8"},
                {"src":"/public/images/member_images/周舒雅.jpg","srcs":"/public/images/member_images/周舒雅s.jpg", "content": "<p>测试数据</p>", "href":"javascript:", "alt":"test", "grade":"2013", "title":"13-周舒雅", "id":"9"},
                {"src":"/public/images/member_images/谢志强.jpg","srcs":"/public/images/member_images/谢志强s.jpg", "content": "<p>测试数据</p>", "href":"javascript:", "alt":"test", "grade":"2013", "title":"13-谢志强", "id":"10"},
                {"src":"/public/images/member_images/施佳航.jpg","srcs":"/public/images/member_images/施佳航s.jpg", "content": "<p>测试数据</p>", "href":"javascript:", "alt":"test", "grade":"2013", "title":"13-施佳航", "id":"11"},
                // {"src":"/public/images/member_images/12.jpg","srcs":"/public/images/member_images/.jpg", "content": "<p>测试数据</p>", "href":"javascript:", "alt":"test", "grade":"2013", "title":"13-张敏", "id":"12"},
                // {"src":"/public/images/member_images/13.jpg","srcs":"/public/images/member_images/.jpg", "content": "<p>测试数据</p>", "href":"javascript:", "alt":"test", "grade":"2013", "title":"13-张敏", "id":"13"},
                {"src":"/public/images/member_images/秦文芳.jpg", "srcs":"/public/images/member_images/秦文芳s.jpg", "content":"<p>秦文芳：女，江西师范大学计算机信息工程学院14级网络工程2班，宏奕工作室成员</p><p>个人格言：没有不会做的事，只有不想做的事。</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2014", "title":"14-秦文芳", "id":"14"},
                {"src":"/public/images/member_images/向恢进.jpg", "srcs":"/public/images/member_images/向恢进s.jpg", "content":"<p>向恢进：男，江西师范大学计算机信息工程学院14级计算机科学与技术2班，宏奕工作室14级boss，现坐标江西师大，仍在潜心修炼中</p><p>个人格言： 沉下心，静住气，潜心修炼</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2014", "title":"14-向恢进", "id":"15"},
                {"src":"/public/images/member_images/熊梦颖.jpg", "srcs":"/public/images/member_images/熊梦颖s.jpg", "content":"<p>熊梦颖：江西师范大学计算机信息工程学院14级网络工程2班，宏奕工作室14级财务管理，现坐标江西师大</p><p>个人格言：只要你不计较得失，人生还有什么不能想法子克服的</p><p>简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2014", "title":"14-熊梦颖", "id":"16"},
                {"src":"/public/images/member_images/林金章.jpg", "srcs":"/public/images/member_images/林金章s.jpg", "content":"<p>林金章：男，江西师范大学计算机信息工程学院14级计算机科学与技术1班，宏奕工作室成员</p><p>个人格言：爱拼才会赢</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2014", "title":"14-林金章", "id":"22"},
                {"src":"/public/images/member_images/于龙栋.jpg", "srcs":"/public/images/member_images/于龙栋s.jpg", "content":"<p>于龙栋：男，江西师范大学计算机信息工程学院14级物联网2班，宏奕工作室14级策划总监。埋头苦敲代码空余，喜爱听歌看书，谈谈诗词曲赋</p><p>个人格言：在这人满为患的孤岛上，安然做一只游在森林的鱼</p><p>个人简历：正在完成学业，暂无", "href":"javascript:","alt":"test", "grade":"2014", "title":"14-熊梦颖", "id":"28"},
                {"src":"/public/images/member_images/彭双喜.jpg", "srcs":"/public/images/member_images/彭双喜s.jpg", "content":"<p>彭双喜：男，江西师范大学计算机信息工程学院网络工程2班 ，宏奕工作室成员</p><p>个人格言：中规中矩，赢得信赖。</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2014", "title":"14-彭双喜", "id":"33"},
                {"src":"/public/images/member_images/胡悦.jpg" , "srcs":"/public/images/member_images/胡悦s.jpg", "content":"<p>胡悦：女，江西师范大学计算机学院15级计科正大班，宏奕工作室成员，性格开朗，适时沉默；本领不大，努力不小；德智体美，多向发展；待人处事，抱诚守真；O型天蝎，意志坚定；逆风飞翔，倔强不滞。</p><p>个人格言：天道酬勤</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-胡悦", "id":"17"},
                {"src":"/public/images/member_images/李亮.jpg" , "srcs":"/public/images/member_images/李亮s.jpg", "content":"<p>李亮：男，江西师范大学计算机信息工程学院15级物联网工程学生，宏奕工作室成员。</p><p>个人格言：Nothing is difficult to the man who will try.</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-李亮", "id":"18"},
                {"src":"/public/images/member_images/温隆强.jpg", "srcs":"/public/images/member_images/温隆强s.jpg", "content":"<p>温隆强：男，江西师范大学计算机信息工程学院15级网络工程2班，宏奕工作室成员。一枚喜欢到处游走的稻壳（DOC），沉溺在代码的梦乡。体验光影世界，聆听安静音乐，陶醉迷人书香。</p><p>个人格言：Believe you can make it and you will succeed！</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-温隆强", "id":"19"},
                {"src":"/public/images/member_images/张昊.jpg" ,"srcs":"/public/images/member_images/张昊s.jpg", "content":"<p>张昊：男，江西师范大学计算机信息工程学院15级网络工程2班，宏奕工作室成员，性格开朗，喜欢尝试新鲜事物。经常穿梭于个次元，现暂时在三次元学习，以待功成圆满。</p><p>个人格言：做自己喜欢做的事，不要为外界干扰</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-张昊", "id":"20"},
                {"src":"/public/images/member_images/彭宸.jpg" ,"srcs":"/public/images/member_images/彭宸s.jpg", "content":"<p>彭宸：男，江西师范大学计算机信息工程学院15级网络工程1班，宏奕工作室成员。目前思想技术略显稚嫩，努力学习中。</p><p>个人格言：不要习惯了黑暗就为黑暗辩护；不要为自己的苟且而得意；不要嘲讽那些比自己更勇敢热情的人们。我们可以卑微如尘土，不可扭曲如蛆虫。</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-彭宸", "id":"21"},
                {"src":"/public/images/member_images/黄建凯.jpg", "srcs":"/public/images/member_images/黄建凯s.jpg", "content":"<p>黄建凯：男，江西师范大学计算机信息工程学院15级网络工程1班，宏奕工作室成员，一个爱抓小精灵的程序猿，致力于成为一枚前端攻城狮。</p><p>个人格言：伟大的艺术家总是善于从他人身上窃取灵感</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-黄建凯", "id":"23"},
                {"src":"/public/images/member_images/张晨烨.jpg" ,"srcs":"/public/images/member_images/张晨烨s.jpg", "content":"<p>张晨烨：女，江西师范大学计算机信息工程学院15级计科师范3班，宏奕工作室成员，愿在追逐梦想的途中遇见更好的自己</p><p>个人格言： 最伟大的思想和行动往往需要最微不足道的开始。</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-张晨烨", "id":"24"},
                {"src":"/public/images/member_images/程佳俊.jpg" ,"srcs":"/public/images/member_images/程佳俊s.jpg", "content":"<p>程佳俊：男，江西师范大学计算机学院15级计科师范3班，宏奕工作室成员，游走在Github,CNode，w3school之间的文艺码农</p><p>个人格言：叩首问路，码梦为生。</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-程佳俊", "id":"25"},
                {"src":"/public/images/member_images/沈剑伟.jpg" ,"srcs":"/public/images/member_images/沈剑伟s.jpg", "content":"<p>沈剑伟：男，江西师范大学计算机信息工程学院15级网络工程1班，宏奕工作室成员，技术宅，掌握html,css,js,jq,php,thinkphp,nodejs等知识，致力于前端开发。</p><p>个人格言：自己选的路，无悔不惧。</p><p>个人简历：正在完成学业，暂无</p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-沈剑伟", "id":"26"},
                {"src":"/public/images/member_images/姜敏.jpg" ,"srcs":"/public/images/member_images/姜敏s.jpg", "content":"<p>姜敏：女，江西师范大学计算机信息工程学院网络工程1班，宏奕工作室成员，现坐标江西师大，学习中。</p><p>个人格言：坚持就是胜利</p><p>个人简历：正在完成学业，暂无<p>", "href":"javascript:","alt":"test", "grade":"2015", "title":"15-姜敏", "id":"29"},
            ]};
            $(function(){

                //   html 初始化

                for(j = 0;j<5;j++){
                    $('.five-img ul').append(' <li value ="'+imgData.img[j].id+'" ><a href="'+ imgData.img[j].href +'"><img src="'+imgData.img[j].srcs+'" value ="'+imgData.img[j].grade+'" alt="'+ imgData.img[j].alt +'" /></a></li> ')
                    $('.big-img ul').append(' <li data-value ="'+imgData.img[j].id+'" value ="'+imgData.img[j].grade+'"><a href="'+ imgData.img[j].href +'"><img src="'+imgData.img[j].src+'" alt="'+ imgData.img[j].alt +'" /></a></li> ')
                }
                $('.all-grade .grade').eq(0).addClass('on');
                if(imgData.img[0].grade < 2014)
                    $('.member-introduction .intro-content').html(imgData.img[0].content + "<a href='javascript:;' data-go-route='/c/message/membersList&id="+ imgData.img[0].id +"'>点击查看简历</a>");
                else
                    $('.member-introduction .intro-content').html(imgData.img[0].content);
                $('.member-introduction .intro-name').html(imgData.img[0].title);
                if(!isNextSClick){
                    changeSelected();
                }

                // 变量定义

                var prevS = $('.prevS');
                var nextS = $('.nextS');
                var img = $('.five-img ul li img');//图片，可配置属性
                var count = $('.five-img ul li').length;//li标签的个数
                var smallDisCount = 0;//小图的left
                var liWidth = 90;
                var loadCount = 3;//每次加载的小图片数
                var lineImg = 5;//一行显示的图片数
                var j = 0;
                var clickCount = 0;
                var distance ="122.5";//每次移动的距离
                var firstClone = $('.big-img ul li').eq(0).clone();
                var bigLiCount = $('.big-img ul li').length;
                var bigDistance = $('.big-img ul li').width();//大图的距离
                var bigDisCount = 0;
                var isNextSClick = false;


                //					单击年级事件

                $('.all-grade ul').children().click(function(){

                    var bigImgCount = $('.big-img ul li').length;
                    var indexVal = $(this)[0].value;
                    $('.moveL').removeClass('transition');
                    if(indexVal != '2016'){
                        $(this).addClass('on').siblings().removeClass('on');
                    }else{
                        alert("期待你的加入！");
                    }

                    for(j = bigImgCount; j<imgData.img.length;j++){
                        if (imgData.img[j].grade <= indexVal) {
                            $('.big-img ul').append(' <li data-value ="'+imgData.img[j].id+'" value ="'+imgData.img[j].grade+'"><a href="'+ imgData.img[j].href +'"><img src="'+imgData.img[j].src+'" alt="'+ imgData.img[j].alt +'" /></a></li> ')
                        }

                        if (imgData.img[j].grade <= indexVal) {
                            $('.five-img ul').append(' <li value ="'+imgData.img[j].id+'"><a href="'+ imgData.img[j].href +'"><img src="'+imgData.img[j].srcs+'" alt="'+ imgData.img[j].alt +'" /></a></li> ')
                        }
                    }

                    for(j = 0; j<imgData.img.length; j++){
                        if(imgData.img[j].grade != indexVal){
                            clickCount++;
                        }else{
                            break;
                        }
                    }

                    bigDisCount = clickCount;
                    if(indexVal<2016){
                        $('.moveL').css(
                            {'transform':'translateX(' + -(clickCount*bigDistance) + 'px)'}
                        );
                    }
                    for(j = 0;j < imgData.img.length; j++){
                        if(imgData.img[j].id == $('.big-img ul li').eq(clickCount).data('value')){
                            bigDisCount = j;
                            if(imgData.img[j].grade < 2014)
                                $('.member-introduction .intro-content').html(imgData.img[j].content + "<a href='javascript:;' data-go-route='/c/message/membersList&id="+ imgData.img[j].id +"'>点击查看简历</a>");
                            else
                                $('.member-introduction .intro-content').html(imgData.img[j].content);
                            $('.member-introduction .intro-name').html(imgData.img[j].title);
                            break;
                        }
                    }
                    clickCount = 0;
                    smallDisCount = bigDisCount;
                    $('.five-img ul li').eq(smallDisCount).css('border','1px solid red').siblings().css('border','none');
                    $('.five-img ul').css({'transform':'translateX(' + -(smallDisCount*distance) + 'px)'});
                    changeSelected();
                })

                //        		小图的轮播


                var Small_num5 = [];
                for(j = 0;j<5;j++){
                    Small_num5[j] = $('.moveS li').eq(j).clone();
                }

                nextS.on('click',function(){

                    isNextSClick = true;
                    //如果图片余数不足，则加载
                    var count = $('.five-img ul li').length;//li标签的个数
                    var loadCount2 = count;

                    if(count-smallDisCount<=10){
                        for(j = count; j<count+loadCount&&j<imgData.img.length; j++){
                            if(imgData.img[loadCount2]){

                                $('.five-img ul').append('<li value="'+imgData.img[loadCount2].id+'"><a href="'+ imgData.img[loadCount2].href +'"><img src="'+imgData.img[loadCount2].srcs+'" value ="'+imgData.img[loadCount2].grade+'" alt="'+ imgData.img[loadCount2].alt +'" /></a></li>');

                                $('.big-img ul').append(' <li data-value ="'+imgData.img[loadCount2].id+'" value ="'+imgData.img[loadCount2].grade+'"><a href="'+ imgData.img[loadCount2].href +'"><img src="'+imgData.img[loadCount2].src+'" value ="'+imgData.img[loadCount2].grade+'" alt="'+ imgData.img[loadCount2].alt +'" /></a></li> ')

                                loadCount2++;
                            }
                        }
                        //如果全部加载完成，则重置
                        if(!imgData.img[count]){
                            for(j = 0; j<lineImg; j++){
                                $('.moveS').append(Small_num5[j]);
                            }
                        }
                    }

                    smallDisCount++;
                    $('.moveS').addClass('transition');
                    if(smallDisCount == loadCount2-4){
                        $('.moveS').removeClass('transition');
                        $('.moveS').css({'transform':'translateX(0px)'});
                        smallDisCount = 0;
                    }

                    $('.moveS').css({'-webkit-transform':'translateX(' + -(smallDisCount*distance)+ 'px)'});

                    //				单击小图事件 动态
                    changeSelected();


                });

                prevS.on('click',function(){
                    smallDisCount--;
                    if(smallDisCount == -1){
                        smallDisCount = 0;
                    }
                    $('.five-img ul').css({'transform':'translateX(' + -(smallDisCount*distance) + 'px)'});
                })





                //            大图轮播


                $('.nextL').on('click', function() {
                    bigDisCount++;
                    moveL();
                    $('.moveL').css({'transform':'translateX('+ -(bigDisCount*bigDistance)+'px)'});
                });

                $('.prevL').on('click', function() {

                    bigDisCount--;

                    if($('.big-img ul li').length < imgData.img.length+1 && bigDisCount == -1){
                        bigDisCount = 0;
                    }else if($('.big-img ul li').length == imgData.img.length+1 && bigDisCount == -1){
                        $('.moveL').removeClass('transition');
                        $('.moveL').css({'transform':'translateX(' + -(imgData.img.length)*bigDistance +'px)'});
                        bigDisCount = imgData.img.length
                    }else{
                        moveL();
                    }
                });


                //		自动轮播

                var t = setInterval(function(){
                    bigDisCount++;
                    moveL();
                },4000)

                //对定时器的操作

                $(".big-img,.small-img,.member-introduction").hover(function(){
                    clearInterval(t);
                },function(){
                    t=setInterval(function(){
                        bigDisCount++;
                        moveL();
                    },4000)
                })
                // function 区
                function ChangeOn(){
                    if($('.big-img ul li').eq(bigDisCount)[0].value
                        != $('.all-grade .on')[0].value){
                        for(j = 0; j < 5;j++){
                            if($('.big-img ul li').eq(bigDisCount)[0].value
                                == $('.all-grade ul li').eq(j)[0].value){
                                $('.all-grade ul li').eq(j).addClass('on')
                                    .siblings().removeClass('on');
                            }
                        }
                    }
                }

                function nextFun(){
                    isNextSClick = true;
                    //如果图片余数不足，则加载
                    var count = $('.five-img ul li').length;//li标签的个数
                    var loadCount2 = count;

                    if(count-smallDisCount<=10){
                        for(j = count; j<count+loadCount&&j<imgData.img.length; j++){
                            if(imgData.img[loadCount2]){

                                $('.five-img ul').append('<li value="'+imgData.img[loadCount2].id+'"><a href="'+ imgData.img[loadCount2].href +'"><img src="'+imgData.img[loadCount2].srcs+'" value ="'+imgData.img[loadCount2].grade+'" alt="'+ imgData.img[loadCount2].alt +'" /></a></li>');

                                $('.big-img ul').append(' <li data-value ="'+imgData.img[loadCount2].id+'" value ="'+imgData.img[loadCount2].grade+'"><a href="'+ imgData.img[loadCount2].href +'"><img src="'+imgData.img[loadCount2].src+'" value ="'+imgData.img[loadCount2].grade+'" alt="'+ imgData.img[loadCount2].alt +'" /></a></li> ')

                                loadCount2++;
                            }
                        }

                        //如果全部加载完成，则重置
                        if(!imgData.img[count]){
                            for(j = 0; j<lineImg; j++){
                                $('.moveS').append(Small_num5[j]);
                            }
                        }
                    }

                    $('.moveS').addClass('transition');

                    if(smallDisCount == loadCount2-5){
                        $('.moveS').removeClass('transition');
                        $('.moveS').css({'transform':'translateX(0px)'});
                        smallDisCount = 0;
                    }

                    if(smallDisCount<=bigDisCount)
                        $('.moveS').css({'transform':'translateX(' + -(smallDisCount*distance) + 'px)'});


                    $('.five-img ul').children().click(function(){

                        $(this).css('border','1px red solid').siblings().css('border','none');
                        $('.moveL').removeClass('transition');

                        for(j = 0;j < imgData.img.length; j++){
                            if($(this)[0].value == $('.big-img ul li').eq(j).data('value')){
                                bigDisCount = j;
                                if(imgData.img[j].grade < 2014)
                                    $('.member-introduction .intro-content').html(imgData.img[j].content + "<a href='javascript:;' data-go-route='/c/message/membersList&id="+ imgData.img[j].id +"'>点击查看简历</a>");
                                else
                                    $('.member-introduction .intro-content').html(imgData.img[j].content);
                                break;
                            }
                        }

                        $('.big-img ul').css({'transform':'translateX(' + -(bigDisCount*bigDistance)+ 'px)'}
                        );

                        if(bigDisCount < imgData.img.length){
                            $('.member-name span').html(imgData.img[bigDisCount].title);
                        }else{
                            $('.member-name span').html(imgData.img[0].title);
                        }
                    })
                }


                function moveL(){

                    if (bigDisCount == imgData.img.length) {
                        $('.big-img ul').append(firstClone);
                    }

                    if(! ($('.big-img ul li').eq(bigDisCount).length) &&
                        $('.big-img ul li').length < imgData.img.length){

                        $('.big-img ul').append(' <li data-value ="'+imgData.img[bigLiCount].id+'" value ="'+imgData.img[bigLiCount].grade+'"><a href="'+ imgData.img[bigLiCount].href +'"><img src="'+imgData.img[bigLiCount].src+'" value="'+imgData.img[bigLiCount].grade +'" alt="'+ imgData.img[bigLiCount].alt +'"/></a></li>')
                        $('.five-img ul').append('<li value="'+imgData.img[bigLiCount].id+'"><a href="'+ imgData.img[bigLiCount].href +'"><img src="'+imgData.img[bigLiCount].srcs+'" value ="'+imgData.img[bigLiCount].grade+'" alt="'+ imgData.img[bigLiCount].alt +'" /></a></li>');
                        bigLiCount++;
                    }
                    $('.moveL').addClass('transition');

                    if(bigDisCount > imgData.img.length){
                        $('.moveL').removeClass('transition');
                        $('.moveL').css('transform','translateX(0px)');
                        bigDisCount = 0;
                    }

                    if(bigDisCount < imgData.img.length){
                        $('.member-name span').html(imgData.img[bigDisCount].title);
                    }else{
                        $('.member-name span').html(imgData.img[0].title);
                    }

                    ChangeOn();

                    for(j = 0;j < imgData.img.length; j++){
                        if($(this)[0].value == $('.big-img ul li').eq(bigDisCount).data('value')){
                            if(imgData.img[j].grade < 2014)
                                $('.member-introduction .intro-content').html(imgData.img[j].content + "<a href='javascript:;' data-go-route='/c/message/membersList&id="+ imgData.img[j].id +"'>点击查看简历</a>");
                            else
                                $('.member-introduction .intro-content').html(imgData.img[j].content);
                            $('.member-introduction .intro-name').html(imgData.img[j].title);
                            break;
                        }
                    }
                    $('.moveL').css({'transform':'translateX('+ -(bigDisCount*bigDistance)+'px)'});

                    if(smallDisCount!=bigDisCount)
                        smallDisCount = bigDisCount;
                    if(smallDisCount == 1){
                        smallDisCount = 0;
                    }

                    var count = $('.five-img ul li').length;//li标签的个数
                    var loadCount2 = count;
                    for(j = 0; j<imgData.img.length; j++){
                        if($('.big-img ul li').eq(bigDisCount).data('value')
                            == imgData.img[j].id){
                            $('.five-img ul li').eq(j).css({
                                border: '1px red solid'
                            }).siblings().css({border:'none'});
                            if(imgData.img[j].grade < 2014)
                                $('.member-introduction .intro-content').html(imgData.img[j].content + "<a href='javascript:;' data-go-route='/c/message/membersList&id="+ imgData.img[j].id +"'>点击查看简历</a>");
                            else
                                $('.member-introduction .intro-content').html(imgData.img[j].content);
                            $('.member-introduction .intro-name').html(imgData.img[j].title);
                            break;
                        }
                    }
                    nextFun();
                }

                function changeSelected(){
                    $('.five-img ul').children().click(function(){
                        $(this).css('border','1px red solid').siblings().css('border','none');
                        $('.moveL').removeClass('transition');

                        for(j = 0;j < imgData.img.length; j++){
                            if($(this)[0].value == $('.big-img ul li').eq(j).data('value')){
                                bigDisCount = j;
                                if(imgData.img[j].grade < 2014)
                                    $('.member-introduction .intro-content').html(imgData.img[j].content + "<a href='javascript:;' data-go-route='/c/message/membersList&id="+ imgData.img[j].id +"'>点击查看简历</a>");
                                else
                                    $('.member-introduction .intro-content').html(imgData.img[j].content);
                                $('.member-introduction .intro-name').html(imgData.img[j].title);
                                break;
                            }
                        }

                        $('.big-img ul').css({'transform':'translateX(' + -(bigDisCount*bigDistance)+ 'px)'}
                        );
                    })
                }
            })
        })
    }




    exports.footer = function() {

//         var b = document.getElementsByTagName('button');
//         console.log(b.length);


//      document.getElementById('theone').onmouseenter = function a(){
//         document.getElementById('popup').style.display='block';
//          }
//        document.getElementById('theone').onmouseleave=   function b(){
//         setTimeout(function(){
//             document.getElementById('popup').style.display="none";
//         },300);

//     }

//             var left = b[0].offsetLeft;
//             console.log(left);

//             var top = b[0].offsetTop;

//       document.getElementById('popup').style.left=left -40 +'px';
//       document.getElementById('popup').style.top=top+46+'px';
//       document.getElementById('popup').style.width = 120+'px';

// /**/

//        document.getElementById('thetwo').onmouseenter = function c(){
//         document.getElementById('popup1').style.display='block';
//          }

//         document.getElementById('thetwo').onmouseleave=   function d(){

//          setTimeout(function(){
//             document.getElementById('popup1').style.display="none";
//         },300);
//     }




//             var left = b[1].offsetLeft;
//             console.log(left);

//             var top = b[1].offsetTop;

//       document.getElementById('popup1').style.left=left -54 +'px';
//       document.getElementById('popup1').style.top=top+46+'px';
//       document.getElementById('popup1').style.width=150 + "px";



// /**/
//        document.getElementById('thethree').onmouseenter = function e(){
//         document.getElementById('popup2').style.display='block';
//          }
//         document.getElementById('thethree').onmouseleave=   function f(){
//          setTimeout(function(){
//             document.getElementById('popup2').style.display="none";
//         },300);
//     }

//             var left = b[2].offsetLeft;
//             console.log(left);

//             var top = [2].offsetTop;

//       document.getElementById('popup2').style.left=left -70 +'px';
//       document.getElementById('popup2').style.top=top+46+'px';
//       document.getElementById('popup2').style.width=178 + "px";



    }
})