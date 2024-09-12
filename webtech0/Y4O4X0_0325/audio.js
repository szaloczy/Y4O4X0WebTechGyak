var myAudio = document.getElementById("audio1");


function tekerVideoba() {
    var video = document.getElementById('audio1');
    video.currentTime += 10;
}

function visszaTekerVideoba() {
    var video = document.getElementById('audio1');
    video.currentTime -= 10;
}

function playPause() { 
    if (myAudio.paused) 
    myAudio.play(); 
    else 
    myAudio.pause(); 
  } 
function mute(){
    myAudio.muted=true;
}

function quite(){
    var currentVolume = myAudio.volume;
    var newVolume = currentVolume / 2;
    myAudio.volume = newVolume;
}

function loud(){
    var currentVolume = myAudio.volume;
    var newVolume = currentVolume  ;
    myAudio.volume = 1;
}

function slowRate(){
    var currentPlaybackRate = myAudio.playbackRate;
    var newPlaybackRate = currentPlaybackRate - 0.2;
    if(newPlaybackRate >= 0.1){
        myAudio.playbackRate = newPlaybackRate;
    }
}

function verySlowRate(){
    var currentPlaybackRate = myAudio.playbackRate;
    var newPlaybackRate = currentPlaybackRate - 0.5;
    if(newPlaybackRate >= 0.1){
        myAudio.playbackRate = newPlaybackRate;
    }
}

function normalRate(){
    myAudio.playbackRate=1;
}

function fasterRate(){
    myAudio.playbackRate =1.5;
}

function veryFastRate(){
    myAudio.playbackRate =2.0;
}

function ellenorizVideot() {
    var video = document.getElementById('audio1');

    if (video.ended) {
        alert('A videó befejeződött!');
    } else {
        alert('A videó még nem fejeződött be.');
    }
}

function getLength(){
    window.alert(myAudio.duration.toFixed(2) + "mp");
}

function getCurrentPosition(){
    window.alert("A video a " + myAudio.currentTime.toFixed(2)+ "másodpercnél jár");
}

function jump(){
    myAudio.currentTime = 90;
}