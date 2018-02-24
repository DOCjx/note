console.log("content_script");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const {fromData} = request;
    if(fromData){
        const {userId, pwd, blone} = fromData;
        document.getElementById("loginname").value = userId;
        document.getElementById("password").value = pwd;
        document.getElementsByTagName("select")[0].value = blone;
        document.getElementsByClassName("W_btn_g")[0].click();
        sendResponse({mes: "success"});
    }else{
        alert("请再次点击图标进行设置！");
        sendResponse({mes: "error"});
    }
});