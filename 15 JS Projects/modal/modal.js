// we want when the open modal button is clicked to
// add the open-modal class to the modal-overlay div
// when the close-button is clicked to remove the 
// open modal class from the div

// we need to grab the following elements
let openButton = document.querySelector('.modal-btn');
let modal = document.querySelector('.modal-overlay');
let closeButton = document.querySelector('.close-button');

openButton.addEventListener('click', function() {
    modal.classList.add('open-modal');
});

closeButton.addEventListener('click', function(){
    modal.classList.remove('open-modal');
});
