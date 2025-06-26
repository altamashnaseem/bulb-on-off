let btn = document.querySelector('.btn');
let audio = document.querySelector('#audio');
let body = document.querySelector('body');

btn.onclick = function(){
    body.classList.toggle('on');

    //playing the audio

    audio.currentTime =0;
    audio.play()
}