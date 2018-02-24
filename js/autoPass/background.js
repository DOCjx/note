console.log("background");
const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
const rmLocalStorage = key => {
    localStorage.removeItem(key);
};
const getLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
};
const sendFromeData = tab => {
    getLocalStorage("fromData");
    chrome.tabs.sendMessage(tab.id, {fromData: getLocalStorage("fromData")}, function(response) {
        console.log("mes:", response);
        if(response.mes == "error"){
            chrome.browserAction.setPopup({tabId: tab.id, popup: "popup.html"});
            setLocalStorage("isPopup", {tabId: tab.id})
        }
        console.log("%c自动填充成功！有兴趣的小伙伴加：1324121459(QQ)", "background-color: green;");
    });
};
let count = 0;
chrome.browserAction.onClicked.addListener(function(tab) {
    if(~tab.url.indexOf("http://219.229.251.2")){
        count == 0 && chrome.tabs.executeScript({
            file: "content_script.js"
        });
        sendFromeData(tab);
        count++;
    }
});