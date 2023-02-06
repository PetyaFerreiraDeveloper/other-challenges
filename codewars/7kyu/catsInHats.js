function catsInHats (n) {
    let start = 2000000;
    if(n == 0) {
        return start.toFixed(3);
    }
    let newCatHeight = start;
    while(n > 0) {
        n--;
        newCatHeight = newCatHeight / 2.5;
        start += newCatHeight;
    };

    return start.toFixed(3);
}

module.exports = catsInHats;