chrome.runtime.onMessage.addListener(function(request){
    //document.getElementById("startButton").style.backgroundColor = "green";
    //document.getElementById("startButtonSpan").innerText= "casting..";
    alert(request);
})