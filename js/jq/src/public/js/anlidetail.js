define(function (require, exports, module) {
    exports.row = function(){  // 这是利用监视鼠标滑动的距离进行实施定位以达到fixed的效果；
        $(window).scroll(function(){
            var targetTop = $(this).scrollTop();
            if (targetTop >= 500){
                var top=targetTop-500+"px";
                $(".project-sidebars").css("top",top);
            }else{
                $(".project-sidebars").css("top","150");
            }
        });
    };
  
});
