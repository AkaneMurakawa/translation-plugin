// add listener for mouseup
document.addEventListener('mouseup', selectWords, true);

// get the select words
function selectWords(event){
    var selection = window.getSelection();
    var text = selection.toString();
    if (text === '' || !text){
        return;
    }

    chrome.storage.sync.set({'text': text}, function(){
        console.log('select content: ', text)
    });
}