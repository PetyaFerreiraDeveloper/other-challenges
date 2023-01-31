// lets grab the button we want to click
const navToggle = document.querySelector('.nav-toggle');

// lets grab the links we want to show or hide when button is clicked
const navLinks = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // if(navLinks.classList.contains('show-links')) {
    //     navLinks.classList.remove('show-links');
    // } else {
    //     navLinks.classList.add('show-links');
    // }
    navLinks.classList.toggle('show-links');
})

