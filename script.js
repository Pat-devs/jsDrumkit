let drumkitContainer = document.querySelector(".drumkit")


// Create element with javascript :)

// #1 create the element (in memory)
let myElement = document.createElement("h1")
// #2 adjust properties...
myElement.textContent = "Hi"
// #3 append the element somewhere on the page...
drumkitContainer.append(myElement)

// change the text on my element:

myElement.textContent = "Bye"

// utility functions to create custom elements:

let element;

// creates a button, with given textContent
function createButton(text) {
    element = document.createElement("button")
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

testAudio.controls = true

drumkitContainer.append(testAudio)