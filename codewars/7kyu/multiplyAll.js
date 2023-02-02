function multiplyAll(arr) {
    function multiply_all(num) {
        let result = arr.map(item => item * num);
        return result;
    }
    return multiply_all;
};

module.exports = multiplyAll