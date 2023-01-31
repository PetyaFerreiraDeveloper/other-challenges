const quotes = [
    {
        id: 1,
        author: 'Albert Einstein',
        occupation: 'German theoritical physicist and a Nobel Prize Winner',
        img: './pics/albertEinstein.png',
        quote: '"Reality is merely an illusion, albeit a very persistent one."'
    },
    {
        id: 2,
        author: 'Søren Kierkegaard',
        occupation: 'Profilic Danish writer, considered the first existentialist philosopher',
        img: './pics/soerenKirkegaard.jpeg',
        quote: '"To dare is to lose ones footing momentarily. Not to dare is to lose oneself."',
    },
    {
        id: 3,
        author: 'Albert Einstein',
        occupation: 'German theoritical physicist and a Nobel Prize Winner',
        img:'./pics/albertEinstein.png',
        quote: '"If at first the idea is not absurd, then there is no hope for it."'
    },
    {
        id: 4,
        author: 'Leonardo Da Vinci',
        occupation: 'Italian Renaissance polymath and painter',
        img: './pics/leonardoDaVinci.jpeg',
        quote: '"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."'
    },
    
];

// access the parent of the buttons and listen for a click event
// access each of the elements we want to show
// set an initial index to loop through the quotes array
// create a function which we can call and it will load all the elements we want to show each time a button is clicked
// create a function to generate a random number between 0 and array.length
// We need to identify which button was clicked
// when forward button is clicked - go to the next element of the array
// when last element is reached start from the beggining
// When backward button is clicked - go to previous element from array
// when we reach the first element- go to the end of the array
// when random is clicked, randomly select an element from the array

// lets grab the parent of the buttons

let parentButtons = document.getElementById('buttons');
//lets grab each of the elements from div#info and set them into a function
let author = document.getElementById('author');
let occupation = document.getElementById('occupation');
let img = document.getElementById('img');
let quote = document.getElementById('quote');


// lets set an index item to go trough the area
let currentItem = 0;

function showPerson(index) {
    let person = quotes[index];
    author.textContent = person.author;
    occupation.textContent = person.occupation;
    img.src = person.img;
    quote.textContent = person.quote;
}

function randomFunction() {
    // create a function to generate a random number and display an object from the array
    currentItem = Math.floor(Math.random() * quotes.length);
    showPerson(currentItem);
} 

// load initial item with event Listener for Window load event
window.addEventListener('DOMContentLoaded', showPerson(3));

// lets create the event listener, utilizing the bubbling
parentButtons.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList == 'random') {
        randomFunction();
    } else if(target.classList == 'next-button' || target.classList == 'fas fa-arrow-right fa-3x') {
        currentItem++;
        if(currentItem > quotes.length - 1) {
            currentItem = 0;
        }
    } else if(target.classList == 'prev-button' || target.classList == 'fas fa-arrow-left fa-3x') {
        currentItem--;
        if(currentItem < 0) {
            currentItem = quotes.length - 1;
        }
    }
    showPerson(currentItem);
})
