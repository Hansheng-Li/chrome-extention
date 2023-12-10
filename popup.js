document.addEventListener('DOMContentLoaded', function () {
  // 消息监听器
  chrome.runtime.sendMessage({request: "getTextContent"}, function(response) {
    if (response && response.textContent) {
        document.getElementById('test2').textContent = response.textContent;
    }
});

  // 获取当前标签页的标题
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      var activeTab = tabs[0];
      var pageTitle = activeTab.title;
      document.getElementById('pageTitle').textContent = pageTitle + "!!!"; 
  });

  // 计数器逻辑
  var counter = 0;
  var counterButton = document.getElementById('myButton');
  counterButton.addEventListener('click', function() {
      counter++;
      document.getElementById('test1').textContent = counter;
  });

  // 测试按钮逻辑
  var testButton = document.getElementById('b2');
  testButton.addEventListener('click', function() { 
      document.getElementById('test2').textContent = 'aaa';
  });
});
