chrome.runtime.onMessage.addListener(function(request){
    addText(request)
})

function addText(request){
    document.body.innerHTML += request 
}