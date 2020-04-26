$(function(){
    function setLang(){
        var lang = $("#lang").val();
        if (lang){
            // 设置需要翻译的语言
            chrome.storage.sync.set({'lang': lang}, function(){
                close();
            });
        }
    }
});