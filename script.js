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



// a bit about return statement

// function takes two arguments (a and b) and prints the sum
// function sum(a, b, output) {
//     let result = a + b
//     // print the sum
//     console.log(result)
// }

// sum(2,2)

// sum(2,50915)

// // function takes two arguments (a and b) and prints the on the webpage
// function sumOnWebpage(a, b) {
//     let result = a + b
//     // get the #calc-result element
//     let resultElement = document.querySelector("#calc-result")
//     resultElement.textContent = result
// }

// sumOnWebpage(5,5)

// function takes two arguments (a and b) and returns the sum
function sum(a, b) {
    let result = a + b
    return result
}

console.log(sum(2,2))

let resultElement = document.querySelector("#calc-result")
resultElement.textContent = sum(2135,2)