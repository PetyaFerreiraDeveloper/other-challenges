ul.addEventListener('click', (e) => {
    // with an anchor tag, you need to stop the page doing a refresh with preventDefault()
    e.preventDefault();
    let target = e.target;

    if(target.tagName === 'LI') {
        // remove the currently selected link
        if(selectedLink !=null) {
            selectedLink.classList.toggle('selected');
        };
        selectedLink = target;
        console.log(selectedLink);
        selectedLink.classList.toggle('selected');
    };

    // now deal with the anchor tag
    if(target.tagName === 'A') {
        // remove the currently selected link
        if(selectedLink !=null) {
            selectedLink.classList.toggle('selected');
        };
        // depending on how you want your styling to look, you may want to grab the parent of the <a> (being the LI tag) so the user does not know whether
        // they have clicked on the LI or A. In other words, we are keeping the styling the same. If you don't want this, you can only style the <a> element. 
        // In this case remove the parentElement from here, and then find the child element when the LI is the target
        selectedLink = target.parentElement;
        selectedLink.classList.toggle('selected');
    }


})