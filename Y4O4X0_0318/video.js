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

  