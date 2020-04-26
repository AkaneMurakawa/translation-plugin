/**
 * 百度翻译文档: http://api.fanyi.baidu.com/doc/21
 */

// 监听鼠标
document.addEventListener('mouseup', selectWords, true);

// 获取选中的内容
function selectWords(event){
    var selection = window.getSelection();
    var txt = selection.toString();
    if (txt === '' || !txt){
        return;
    }

    // 发送信息到popup.js
    // var storage = window.localStorage;
    // storage.txt = txt;
    // chrome.storage.sync.set({'txt': txt}, function(){
    //     console.log('select content: ', txt)
    //     // close();
    // });
}