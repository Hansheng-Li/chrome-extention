chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        // chrome.notifications.create(`my-notification-${Date.now()}`,{
        //     type: 'basic',
        //     iconUrl: 'icon.png',
        //     title: 'Tab Updated',
        //     message: 'A tab was updated: ' + tab.title
        // });
        console.log('Tab updated:', tab.url); // 当标签页加载完成时在控制台打印URL
    }  
});

// 监听标签页创建事件
chrome.tabs.onCreated.addListener((tab) => {
    console.log('Tab created:', tab.url); // 当新标签页创建时在控制台打印URL
});
 

// background.js
var textContent = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.textContent) {
        textContent = message.textContent;
    }

    // 响应弹出页面的请求
    if (message.request === "getTextContent") {
        sendResponse({textContent: textContent});
    }
});
