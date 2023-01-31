let counter = 0;
let paragraph = document.getElementById('counter');
function increase() {
    counter = counter + 1;
    paragraph.innerHTML = counter;
};

function decrease() {
    counter = counter - 1;
    paragraph.innerHTML = counter;
};

function reset() {
    counter = 0;
    paragraph.innerHTML = counter;
};
