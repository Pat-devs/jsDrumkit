let buttonPlay = document.querySelector("#btn-play")
let buttonPause = document.querySelector("#btn-pause")

let buttonStop = document.querySelector("#btn-stop")

let audioElement = document.querySelector("#clap-sound")

function playSound() {
    // play a sound:
    audioElement.play()
} 

function pauseSound() {

    audioElement.pause()
}

function stopSound() {

    audioElement.pause()
    audioElement.currentTime = 0
}

buttonPlay.addEventListener("click", playSound)
buttonPause.addEventListener("click", pauseSound)
buttonStop.addEventListener("click", stopSound)