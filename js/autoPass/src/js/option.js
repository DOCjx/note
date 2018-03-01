window.onload = () => {
    const formData = JSON.parse(localStorage.getItem("fromData"));
    if(formData){
        document.getElementById("user-id").value = formData.userId;
        document.getElementById("pwd").value = formData.pwd;
        document.getElementById("blone").value = formData.blone;
    }

    const disable = document.getElementById("pwd-control");
    disable.addEventListener("click", function(e) {
        const bgColor = this.style.backgroundColor;
        this.innerHTML = bgColor == "green" ? "显示" : "隐藏";
        this.style.backgroundColor = bgColor == "red" ? "green" : "red";
        document.getElementById("pwd").type = bgColor == "green" ? "text" : "password";
    });

    const set = document.getElementById("set");
    set.addEventListener("click", function(e) {
        const userId = document.getElementById("user-id").value,
              pwd = document.getElementById("pwd").value,
              blone = document.getElementById("blone").value;
        if(userId && pwd && blone){
            localStorage.setItem("fromData", JSON.stringify({userId, pwd, blone}));
            const isPopup = JSON.parse(localStorage.getItem("isPopup"));
            if (isPopup){
                chrome.browserAction.setPopup({tabId: JSON.parse(localStorage.getItem("isPopup")).tabId, popup: ""});
                localStorage.removeItem("isPopup");
            }

            document.getElementById("mes").style.display = "block";
            setTimeout(() => {
                document.getElementById("mes").style.display = "none";
            }, 2000);
        }
        return false;
    });

    const reset = document.getElementById("reset");
    reset.addEventListener("click", function(e) {
        localStorage.clear();
    });
};