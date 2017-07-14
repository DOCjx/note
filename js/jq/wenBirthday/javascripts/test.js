$(function(){
    function updateClock() {
        var together = new Date('1998/12/28 23:30:00');
        var current = Date();
        var seconds = (Date.parse(current) - Date.parse(together)) / 1000;
        var years = Math.floor(seconds / (3600 * 24*30*12));
        var months = Math.floor(seconds / (3600 * 24*30))-years*12;
        var days = Math.floor(seconds / (3600 * 24))-years*12*30-months*30;
        var hours = Math.floor(seconds / (3600))-years*12*30*24-months*30*24-days*24;
        var minutes = Math.floor(seconds / 60)-years*12*30*24*60-months*30*24*60-days*24*60-hours*60;
        seconds = seconds%60;
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        return years+ '年' +months+ '月' +days + '天' + hours + '小时' + minutes + '分' + seconds;

    }
    function setAnim(tag, action) {
        $(tag).removeClass().addClass(action + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass();
        });
    };
    setInterval(function() {
        $(".words")[0].innerHTML="<span>"+updateClock()+"</span>";
    }, 500);
    $('#world').addClass('start');
    var music = document.getElementById("bgMusic");
    $("#btn").click(function(){
        setAnim("#box2","tada");
        if(music.paused){
            music.play();
            $("#btn").removeClass("pause").addClass("play");
            $("#btn").html('ON');
        }else{
            music.pause();
            $("#btn").removeClass("play").addClass("pause");
            $("#btn").html('OFF');
        }
    });
    $('#btn1').click(function(){
        $('#box2').removeClass();
        $('#box3').removeClass();
        setAnim("#box2","zoomOut");
        setTimeout(function () {
            $('#box2').css("display","none");
        }, 600);
        setTimeout(function () {
            $('#box3').css("display","block");
            setAnim("#box3","bounceIn");
        }, 700);
        setTimeout(function () {
            $('#img').css("display","block");
            setAnim("#img","zoomInRight");
        }, 720); 
    });
    $('#btn2').click(function(){
        $('#box2').removeClass();
        $('#box3').removeClass();
        $('#img').removeClass();
        $('#img').css("display","none");
        setAnim("#box3","zoomOutLeft");
        setTimeout(function () {
            $('#box3').css("display","none");
        }, 600);
        setTimeout(function () {
            $('#box2').css("display","block");
            setAnim("#box2","rollIn");
        }, 700);
    });
})