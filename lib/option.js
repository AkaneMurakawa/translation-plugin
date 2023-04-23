$(function () {
    // save the setting.
    $("#setting").click(function () {
        var lang = $("#lang").val();
        var isSpeech = $('input[name="speech"]:checked').val();
        if (lang) {
            chrome.storage.sync.set({
                'lang': lang
            }, function () {});
        }
        if (isSpeech) {
            chrome.storage.sync.set({
                'isSpeech': isSpeech
            }, function () {});
        }
        close();
    });
});