define(function(require, exports, module){
    module.exports = {
        _init: _init,
        init: init,
        side: side,
        ganli: ganli,
        gshchild: gshchild
        // getside: getside
    };
    var tmachine = new Array();
    var ii = -1;
    var event = require('event');
    var route = require('route');
    function _init(){
        var css = require('/public/css/css_app');
        var tpl = require('v/tpl_app');
        var archive = require('m/archive');
        var base = require('/public/js/base');
        var foo = require('v/tpl_footer');
        var foocss=require('/public/css/css_footer');
        var foojs = require('/public/js/footer');
        // 初始化页面
        var topicList;
        archive.getTopicList(function (topicList) {
            base.nav(topicList,function (navPk) {
                archive.getShc(function (data) {
                    //  console.log(data);
                    var header = tpl.header({topicList: navPk});
                    var body = tpl.body({shc:data});
                    //var footer = tpl.footer();
                    var footer = foo.footer();
                    $(HY.rootDom).html(css + header + body + footer+foocss);
                    var yun = require('/public/js/app_index');
                    yun.liu();
                    var ggtpl = require('v/tpl_anli');
                    var anlijs = require('/public/js/anli');
                    var anlicss = require('/public/css/css_anli');
                    archive.getGongGao(function(gao)
                    {
                        archive.getAnLiList(function(details)
                        {
                            archive.getArt(function(art)
                            {
                                archive.getFart(function(fart)
                                {
                                    var shenghuo = ggtpl.shenghuo({'child':art,'art':fart});
                                    var gong = ggtpl.gonggao({'aa':gao});
                                    var detail = ggtpl.main({'main':details});
                                    var member = ggtpl.member({});
                                    var footer = ggtpl.footer({});
                                    $("#gonggao").html(gong+anlicss);
                                    $(".anli").html(detail);
                                    $(".shenghuo").html(shenghuo);
                                    $('#member').html(member);
                                    anlijs.gonggao();
                                    anlijs.main();
                                    anlijs.shenghuo();
                                    anlijs.member();
                                    var id = HY.route.now.params.id;
                                    // console.log(id); 
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    function init(){
    }
    function side(){
        var sideid = HY.route.now.params.id;
        var archive = require('m/archive');
        var text1 = "";
        var text2 = "";
        var text3 = "";
        var text4 = "";
        var text5 = "";
        var text6 = "";
        var text7 = "";
        var text = "";
        archive.getTopicList(function(detail){
            archive.getBlogTitle(function (title) {
                // console.log(title);
                var arr = new Array();
                detail.forEach(function(v){
                    var children = new Array();
                    var titleArr = new Array();
                    if(0 == v['pid']){
                        detail.forEach(function(vv){
                            if(vv['pid'] == v['id']){
                                children.push(vv);
                            }
                        });
                        title.forEach(function(item){
                            if(item['category_id'] == v['id']){
                                titleArr.push(item);
                            }
                        });
                        // console.log(titleArr);
                        v['children'] = children;
                        v['title'] = titleArr;
                        v['title'].splice(4,100)
                        arr.push(v);
                    };
                });
                // console.log(arr);
                arr.forEach(function (item) {
                    if(item.id == sideid){
                        text1 = "<a href='javascript:;' id='remove-logo' onclick='removeLogo()'> <span class='glyphicon glyphicon-remove remove-logo' aria-hidden='true'></span></a>" +
                        "<script language='JavaScript'>function removeLogo(){var tag=document.getElementById('curbg');tag.style.display = 'none';}</script>" +"<p class='curbg-titile'>"+item.name+"</p>";
                        item.children.forEach(function (child) {
                            text2 += "<a href='javascript:;' data-go-route-reload='/c/blog/articleList&indexId="+child.id+"'>"+child.name+"</a> / ";
                        });
                        // console.log(text2);
                        text3 = "<div class='curbg-list'>"+text2+"</div>";
                        text4 = " <p class='curbg-titile'>博客推荐</p>";
                        item.title.forEach(function (title) {
                            /*detail/init&articleId=2*/
                            text5 += "<li><a href='javascript:;' data-go-route-reload='/c/detail/init&articleId="+title.id+"'>"+title.title+"</a></li>"
                        });
                        text6 = "<div class='curbg-list'> <ul>" + text5 + "<li><a href='javascript:;'>更多</a></li>" +"</ul></div>";
                        text7 = "<p class='curbg-img'><img src='public/images/curbg/"+item['img']+"'width=200 height=250 alt='IT圣书' /></p>";
                        text = text1+ text7 + text3 + text4  + text6;
                    }
                });
                $(".curbg").html(text);
            });
        });
    }
    function ganli(){
        var aId = HY.route.now.params.aid;
        var archive = require('m/archive');
        var ggtpl = require('v/tpl_anli');
        var anlijs = require('/public/js/anli');
        var arr = new Array();
        var i = 0;
        archive.getAnLi(function(data){
            data.forEach(function(v){
                if(v.pid == aId){
                    i++;
                    arr[i] = v;
                }
            })
            var html = ggtpl.main({"main": arr});
            $(".anli").css({"display":"none"});
            $(".anli").fadeIn('slow');
            $(".anli").html(html);
            anlijs.main();
        })
    }
    function gshchild(){
        var sId = HY.route.now.params.sid;
        var Id = HY.route.now.params.id;
        var archive = require('m/archive');
        var ggtpl = require('v/tpl_anli');
        var anlijs = require('/public/js/anli');
        var childarr = new Array();
        var i = 0;
        var arr = new Array();
        var fid;       //每个栏目的第一个篇文章
        archive.getShchild(function(data){
            archive.shcategory(function(data1){
                archive.getShenghuo(function(data2){
                    data1.forEach(function(k){
                        if(k.id == sId){
                            fid = k.cid;
                        }
                    })
                    data.forEach(function(v){
                        if(v.pid == sId){
                            i++;
                            childarr[i] = v;
                        }
                    })
                    if(Id == 0){
                        data2.forEach(function(s){
                            if(s.category_id == fid){
                                arr[i] = s;
                            }
                        });
                    }else{
                        data2.forEach(function(s){
                            if(s.category_id == Id){
                                arr[i] = s;
                            }
                        });
                    }
                    var html  = ggtpl.shenghuo({'child':childarr,'art':arr});
                    $(".shenghuo").html(html);
             /*       $('.art-menu li').on('click',function(){
                        var size = $(this).index();
                        ii++;
                        tmachine[ii] = size;
                        if(tmachine.length > 2)
                        {
                            tmachine[0]=tmachine[1];
                            tmachine[1]= size;
                            ii=-1
                        };
                    });*/
                   // console.log(tmachine);
                    $('.art-menu li').each(function(v){
                        var index = $(this).attr('index');
                        if(Id == index){
                            $(this).addClass('border-active');
                            $(this).children('a').addClass('font-active');
                        /*    if(tmachine[1]>tmachine[0]){
                                $('.art-content-hidden1').animate({top:"-638px"},100,function(event){
                                })
                                $('.art-content').animate({bottom:"-319px"},100,function(event){
                                })
                            }else{
                                $('.art-content').animate({bottom:"319px"},100,function(event){
                                })
                            }*/
                        }else if(Id == 0){
                            $('.art-menu li:first-child').addClass('border-active');
                            $('.art-menu li:first-child').children('a').addClass('font-active');
                        }
                    })
                })
            })
        })
    }
});

