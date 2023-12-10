// 在内容脚本中
var xpath = '/html/body/div/div/div[1]/div[1]/div[1]/span';
var xpath = '/html/body/div[1]/div/div[2]/header/div[2]/div/div/div[1]/h1';
var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 在 content.js 中
console.log("Element textContent: ", element ? element.textContent : "Element not found");

if (element) {
    // 发送消息到扩展的其他部分
    chrome.runtime.sendMessage({textContent: element.textContent});
}


// var xpath = '/html/body/div[1]/div/main/div/div/div[3]/div[1]/div/div/div/div/div/div[2]/div/div[2]/div/div/div[2]/span[1]/div/div/span';
// var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// if (element) {
//     console.log(element.textContent); // 这将打印出span元素中的所有文本
// } else {
//     console.log('Element not found');
// }

var spanElements = document.querySelectorAll('span.RichText.ztext');

spanElements.forEach(function(span) {
    console.log(span.textContent); // 打印每个匹配元素的文本内容
});

