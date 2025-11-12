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
];

/*
// search in the soudns array for things that match a certain criteria...
// in this example, we look for something with the property-name "cymbal"
// if something is found it will then return the value (in our case an object with both name, fileName and hokey)
// if nothing matches the criteria, then it will just return undefined
let myClap = sounds.find(value => value.name == "cymbal")

console.log(myClap.hotkey)
*/

// get the drumkit container
let drumkitContainer = document.querySelector(".drumkit")


// utility functions to create custom elements:

// creates a button, with given textContent
function createButton(text) {
    let element = document.createElement("button")
    element.textContent = text

    return element
}

//let clap = createButton(sounds[0].name)
//let kick = createButton(sounds[1].name)

//drumkitContainer.append(sounds[0].name, sounds[1].name)

// loops...

// forEach

sounds.forEach(value => {
    // do something with value...
    console.log(value)
})

sounds.forEach(function(value) {
    console.log(value.hotkey)
})


// an example array of people:

let people = [
  { name: "Ava Johnson", age: 28 },
  { name: "Liam Patel", age: 34 },
  { name: "Sofia Müller", age: 22 },
  { name: "Noah García", age: 41 },
  { name: "Mia Nguyen", age: 22 },
  { name: "Ethan Rossi", age: 22 },
  { name: "Olivia Kim", age: 26 },
  { name: "Liam Patel", age: 37 },
  { name: "Emma Dubois", age: 24 },
  { name: "Lucas Andersen", age: 32 }
];

let oldPeople = people.filter(person => person.age > 30 && person.age < 40 && person.name == "Liam Patel")

console.log(oldPeople)
















// creates an audio element, with given source
function createAudio(source) {
    element = document.createElement("audio")
    element.src = source

    return element
}

let testAudio = createAudio("sounds/acoustic-cymbal-d4jp-r-f1.ogg")

// testAudio.controls = true

drumkitContainer.append(testAudio)
