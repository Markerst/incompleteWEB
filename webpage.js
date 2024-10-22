let myAudio = document.getElementById("myAudio");
function playPause(){
    if(myAudio.paused){
        myAudio.play();
    }
    else{
        myAudio.pause();
    }
}
window.onload = function(){
    let myAudio = document.getElementById("myAudio");
    myAudio.play();
}
