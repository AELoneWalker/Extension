document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').addEventListener('click',onClick,false)
    function onClick(){
        var text = document.getElementById('text').value
        chrome.tab.query({currentWindow:true,active:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,text)
        })
    }
},false)