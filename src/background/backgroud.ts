export {};

chrome.browserAction.onClicked.addListener(()=>{
    chrome.tabs.create({url:'background.html'})
})