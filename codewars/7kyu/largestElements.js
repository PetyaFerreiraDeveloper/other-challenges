function largestElements(num, array) {

    array.sort((a, b) => a - b);
    let index = array.length - num;
    let result = array.splice(index, num);
    return result;

}

module.exports = largestElements;