/**
 * Created by 小熊 on 2016/7/18.
 */
define(function (require, exports, module) {
    exports.checkH = function(){
        var rNav_active = $(".active");
        var rNav_scroll = function(target){
            rNav_active.removeClass	("active");
            target.parent().addClass("active");
            rNav_active = target.parent();
        };
        $("#right-nav a").click(function(){
            rNav_scroll($(this));
            var target = $(this).attr("href");
            var targetScroll = $(target).offset().top-20;
            $("html,body").animate({scrollTop:targetScroll},300);
            return false;
        });
        $(window).scroll(function(){
            var targetTop = $(this).scrollTop();
            if (targetTop >= 430){
                $("#right-nav").addClass("right-nav");
            }else{
                $("#right-nav").removeClass("right-nav");
            }
            //console.log(targetTop);
            if(targetTop < 950){
                rNav_scroll($(".h-address"));
            }else if(targetTop > 1217 && targetTop < 1450){
                rNav_scroll($(".s-join"));
            }else if(targetTop > 1500){
                rNav_scroll($(".c-contact"));
            }
        });

    }
})