// We want when the button is clicked to change the background color to a random color
// and to change the text in the span to display the hex code of the color
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// Step 1. lets grab the button
let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    color.style.color = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

// Lets highlight if we are currently looking at 
// Sample or Hex page

// Lets grab the ul element and use the bubbling 
// effect to listen

let ul = document.querySelector('.nav-links');
// define a selectedLink variable to toggle between classes
let selectedLink = null;


// add the event listener to the UL
ul.addEventListener('click', (e) => {
    // when links are clicked the page refreshes by default.
    // We need to prevent the default behavior
    e.preventDefault();
    // lets find out which <a> tag triggered the event
    let target = e.target;
    

    if(target.tagName === 'A') {
        //remove the currently selected link
        if(selectedLink !=null) {
            selectedLink.classList.toggle('selected');
        };
        selectedLink = target;
        //if i want to change the background color of the Li
        //selectedLink = target.parentElement;
        selectedLink.classList.toggle('selected');
        
    };
});
