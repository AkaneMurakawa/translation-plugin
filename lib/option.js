$(function(){
    $("#setLang").click(function (){
        var lang = $("#lang").val();
        if (lang){
            // save the target language
            chrome.storage.sync.set({'lang': lang}, function(){
                close();
            });
        }
    });
});