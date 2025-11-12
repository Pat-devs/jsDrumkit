// count files:
let clapSound = "acoustic-clap-d4jp-cl-f1.ogg"
let cymbalSound = "acoustic-cymbal-d4jp-r-f1.ogg"
let hihatSound = "acoustic-hihat-d4jp-ch-f1.ogg"
let kickSound = "acoustic-kick-dd2-dk-k-f2.ogg"
let shakerSound = "acoustic-shaker-dd2-dk-sh-5.ogg"
let snareSound = "acoustic-snare-d3-gk-sn-f1.ogg"

// let sounds = [clapSound, cymbalSound]

// console.log(sounds[1])

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
];

console.log(sounds[0].name  )

// search in the soudns array for things that match a certain criteria...
// in this example, we look for something with the property-name "cymbal"
// if something is found it will then return the value (in our case an object with both name, fileName and hokey)
// if nothing matches the criteria, then it will just return undefined
let myClap = sounds.find(value => value.name == "cymbal")

console.log(myClap.hotkey)


let drumkitContainer = document.querySelector(".drumkit")

// utility functions to create custom elements:

// creates a button, with given textContent
function createButton(text) {
    let element = document.createElement("button")
    element.textContent = text

    return element
}

let clap = createButton("clap")
let kick = createButton("kick")

drumkitContainer.append(clap, kick)




















// creates an audio element, with given source
function createAudio(source) {
    element = document.createElement("audio")
    element.src = source

    return element
}

let testAudio = createAudio("sounds/acoustic-cymbal-d4jp-r-f1.ogg")

// testAudio.controls = true

drumkitContainer.append(testAudio)
