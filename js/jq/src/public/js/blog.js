define(function (require, exports, module) {
    exports.init = function(){
//右侧模拟fiexd
    	$(window).scroll(function(){
            var targetTop = $(this).scrollTop();
            if (targetTop >= 430){
                var top=targetTop-430+"px";
                // console.log("top:"+top+";"+"targetTop:"+targetTop);
                $(".rightNav").css("position","absolute").css("top",top).css("left","1070px");
            }else{
                $(".rightNav").css("position","absolute").css("top","0").css("left","1070px");
            }
        });
        $(function(){
            // console.log($(".pagination"));
            $(document).unbind('click').click(function(e){
                e = window.event || e;
                var obj = e.srcElement || e.target;
                var case1 = $(obj).parent().parent().is(".pagination");
                var case2 = $(obj).parent().parent().parent().is(".pagination");
                
//左侧导航      
                var case3= $(obj).parent().parent().parent().parent().is(".navLeft");
                if( case3 ){
                    $(window).scrollTop(430);
                }
//页面分页开始             
                if( case1||case2 ){
                    var prev = $("#0");
                    var allNum = $(".pagination li").length;
                    var next = $("#"+allNum);
                    var focusNum  = $(obj).attr("id");
                    var activeNum = $(".focus").attr("id");
                    // console.log(focusNum);
                    // ($(obj));
                    // console.log(allNum);
                    // console.log(activeNum);
                    if( focusNum=="1" ){
                        $("#"+activeNum).attr("class","");
                        $(".next").attr("id",allNum);
                        $(".next").children().attr("id",allNum);
                        activeNum--;
                        // console.log("fist:"+activeNum);
                        $("#"+activeNum).attr("class","focus");
                    } else if( focusNum==allNum ){
                        $(".prev").attr("id","1");
                        $(".prev").children().attr("id","1");
                        $("#2").attr("class","");
                        $("#"+activeNum).attr("class","");
                        activeNum++;
                        // console.log("last:"+activeNum);
                        $("#"+activeNum).attr("class","focus");
                    } else  if( !(focusNum=="next"||focusNum=="prev")){//
                        $(".prev").attr("id","1");
                        $(".prev").children().attr("id","1");
                        $(".next").attr("id",allNum);
                        $(".next").children().attr("id",allNum);
                        $("#2").attr("class","");
                        // console.log("middle");
                        $("#"+activeNum).attr("class","");
                        $("#"+focusNum).attr("class","focus");
                    }

                    activeNum = $(".focus").attr("id");
                    var nextNum = ++activeNum;
                    if( nextNum==allNum ) {
                        $(".next").attr("id","next");
                        $(".next").children().attr("id","next");
                        $(".prev").attr("id","1");
                        $(".prev").children().attr("id","1");
                    }

                    activeNum = $(".focus").attr("id");
                    var preNum = --activeNum;
                    if( preNum=="1" )  {
                        $(".prev").attr("id","prev");
                        $(".prev").children().attr("id","prev");
                        $(".next").attr("id",allNum);
                        $(".next").children().attr("id",allNum);
                    }
                    var pageNum = $(".focus").text();
                    var start = (pageNum-1)*5;
                    var end = pageNum*5;
                    var endNomal = $(".article_box").length;
                    // console.log(start);
                    // console.log(end);
                    // console.log(endNomal);
                    $(".article_box").css("display","none");
                    for(var i=start;i<end&&i<endNomal;i++){
                        var display = $(".article_box")[i];
                        // console.log($(display));
                        $(display).css("display","block");
                    }
                    $(window).scrollTop(430);
//分页条开始
                    var pagesNum = $(".pagesNum").length;
                    var pagesStart = 1;
                    var pagesEnd = 1;

                    $(".pagesNum").css("display","none");
                    if( pageNum<3 ){
                        // console.log("fist");
                        pagesStart = 0;
                        pagesEnd = 5;
                    } else if( pageNum>(pagesNum-2) ){
                        // console.log("second");
                        pagesStart = pagesNum-5;
                        pagesEnd = pagesNum; 
                    } else {
                        // console.log("thired");
                        pagesStart = pageNum-3;
                        pageNum++;
                        pageNum++;
                        pagesEnd = pageNum;
                    }
                    // console.log("pagesStart:"+pagesStart);
                    // console.log("pagesEnd:"+pagesEnd);
                    for(var j=pagesStart;j<pagesEnd;j++){
                        var pageDisplay = $(".pagesNum")[j];
                        $(pageDisplay).css("display","block");
                    }
                }
            });
        });
    }
})