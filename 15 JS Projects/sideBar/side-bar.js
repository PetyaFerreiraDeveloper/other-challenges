// when we click on the sandwich menu icon i want the sidebar to show
// so we add a show-sidebar class to the aside
// when we click on the x in the sidebar, 
// we remove the show-sidebar class from the aside and the sidebar hides

// we need to select three elements:
let toggleBtn = document.querySelector('.sidebar-toggle');
let closeBtn = document.querySelector('.close-button');
let sidebar = document.querySelector('.sidebar');

// when toggleBtn is clicked we add show-sidebar class to the aside

toggleBtn.addEventListener('click', function() {
    // if(sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // }
    sidebar.classList.toggle('show-sidebar');
})

// when the sidebar is open, close it when the x is clicked

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})