var myVideo = document.getElementById("video1");

function play(){
    myVideo.play();
}

function pause(){
    myVideo.pause();
}

function playPause() { 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  } 
function mute(){
    myVideo.muted=true;
}

function quite(){
    var currentVolume = myVideo.volume;
    var newVolume = currentVolume / 2;
    myVideo.volume = newVolume;
}

function loud(){
   myVideo.volume = 1;
}


function slowRate(){
    var currentPlaybackRate = myVideo.playbackRate;
    var newPlaybackRate = currentPlaybackRate - 0.5;
    if(newPlaybackRate >= 0.1){
        myVideo.playbackRate = newPlaybackRate;
    }
}

function verySlowRate(){
    var currentPlaybackRate = myVideo.playbackRate;
    var newPlaybackRate = currentPlaybackRate / 2;
    if(newPlaybackRate >= 0.1){
        myVideo.playbackRate = newPlaybackRate;
    }
}

function normalRate(){
   myVideo.playbackRate=1;
}

function fasterRate(){
    myVideo.playbackRate = 2;
}

function veryFastRate(){
    myVideo.playbackRate = 5;
}

function small(){
    myVideo
}

function makeSmall(){
    myVideo.width = 300;
}

function normalSize(){
    if(myVideo.width < 400 || myVideo.width > 500){
        myVideo.width = 400;
    }
}

function makeBig(){
    myVideo.width = 600;
}

function isFinished(){
    if(myVideo.ended){
        window.alert("A video befejeződött");
    } else {
        window.alert("A videó még megy");
    }
}
 
function getLength(){
    window.alert(myVideo.duration.toFixed(2) + "mp");
}

function getCurrentPosition(){
    window.alert("A videó a " + myVideo.currentTime.toFixed(2)+" másodpercnél jár");
}