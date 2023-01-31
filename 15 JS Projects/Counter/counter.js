// first grab the parent of the buttons
// grab the paragraph with the count and update its content every time a button is clicked
// add eventListener to the parent
// identify which button was clicked
// if increase was clicked increase count by 1

let parent = document.getElementById('buttons'); // grabbing the parent
let counter = document.getElementById('counter'); // grabbing the counter paragraph
// add event listener and define the logic
let count = 0;
parent.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList == 'increase') {
        count++;
    } else if(target.classList == 'decrease') {
        count--;
    } else if(target.classList == 'reset') {
        count = 0;
    }
    if (count < 0) {
        counter.style.color = 'red';
    } else if (count > 0) {
        counter.style.color = 'green';
    } else {
        counter.style.color = 'black'
    }
    counter.textContent = count;
}); 

