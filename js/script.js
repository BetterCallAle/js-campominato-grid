//extracting the DOM elements
const playBtn = extractElements("play");
const gridWrapper = extractElements("grid");

//add event click to button
playBtn.addEventListener("click", function(){

    //create 100 div with class "square" and number inside them
    for (let i = 1; i <= 100; i++) {
        
        const square = createElement("square");
        square.innerHTML = i
        gridWrapper.append(square)
    }
})


//FUNCTIONS
//extract elements
function extractElements(elementId){
    const elementExtracted = document.getElementById(elementId);
    return elementExtracted
}

//UI FUNCTIONS
//create a "square" element
function createElement(className) {
    const elementCreated = document.createElement("div")
    elementCreated.classList.add(className)
    return elementCreated
}