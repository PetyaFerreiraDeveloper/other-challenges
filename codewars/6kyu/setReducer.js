function setReducer(arr) {
    if(arr.length == 1) return arr[0];
    let newArray = [];

    for(let i = 0, count = 1; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            count += 1;
        } else {
            newArray.push(count);
            count = 1;
        }
    }
    // [1, 2, 3]
    return setReducer(newArray);
}

module.exports = setReducer;