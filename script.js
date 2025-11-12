// count files:
let clapSound = "acoustic-clap-d4jp-cl-f1.ogg"
let cymbalSound = "acoustic-cymbal-d4jp-r-f1.ogg"
let hihatSound = "acoustic-hihat-d4jp-ch-f1.ogg"
let kickSound = "acoustic-kick-dd2-dk-k-f2.ogg"
let shakerSound = "acoustic-shaker-dd2-dk-sh-5.ogg"
let snareSound = "acoustic-snare-d3-gk-sn-f1.ogg"

// sounds array, holds objects that include each sounds name, filename and hotkeys
let sounds = [
    {
        name: "clap",
        fileName: "acoustic-clap-d4jp-cl-f1.ogg",
        hotkey: "q"
    },
    {
        name: "cymbal",
        fileName: "acoustic-cymbal-d4jp-r-f1.ogg",
        hotkey: "w"
    },
    {
        name: "hihat",
        fileName: "acoustic-hihat-d4jp-ch-f1.ogg",
        hotkey: "e"
    },
];

// get the drumkit container
let drumkitContainer = document.querySelector(".drumkit")


// utility functions to create custom elements:

// creates a button, with given textContent
function createButton(text) {
    let element = document.createElement("button")
    element.textContent = text

    return element
}

// creates an audio element, with given source
function createAudio(source) {
    element = document.createElement("audio")
    element.src = source
    element.controls = true

    return element
}

// drumkitContainer.append(createButton("test"))

// loop through the sounds array, and create the buttons based on name property

sounds.forEach(soundObject => {
    // drumkitContainer.append( createButton(sound.name))

    // drumkitContainer.append( createAudio("sounds/" + sound.fileName))
    // create the button, and store in a variable
    let button = createButton(soundObject.name)
    // create the audio tag, and set its source
    let audio = createAudio("sounds/" + soundObject.fileName)
    // create a property caleld audioTag in the object of the array
    soundObject.audioTag = createAudio("sounds/" + soundObject.fileName)

    // create an event listener on button press
    button.addEventListener("pointerdown", function() {
        // event logic goes here..
        audio.play()
    } )

    // create an event to stop the audio on button release
    button.addEventListener("pointerup", function() {
        // stop the sound playback...
        audio.pause()
        audio.currentTime = 0
    })

    drumkitContainer.append(button)
})

console.log(sounds)

window.addEventListener("keydown", function(eventInfo) {
    // 1. which key was pressed
    console.log(eventInfo.key)
    // 2. if key exists in sounds array, do something
    // loop throgh sounds array and find out if a matching hotkey exists
    sounds.forEach(sound => {
        if (sound.hotkey == eventInfo.key) {
            sound.audioTag.play()
        }
    })
})

window.addEventListener("keyup", function(eventInfo) {
    sounds.forEach(sound => {
        if (sound.hotkey == eventInfo.key) {
            sound.audioTag.pause()
            sound.audioTag.currentTime = 0
        }
    })
})