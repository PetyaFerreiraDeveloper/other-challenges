const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.getElementsByClassName('color')[0];
// add the EventListener to the button

btn.addEventListener('click', change);

function change() {
    // get random number between 0 and 3(indexes in the colors array)
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
};

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};