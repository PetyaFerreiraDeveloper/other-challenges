const sumCubes = (n) => {
    // using recursion
    if(n == 1) {
        return n**3;
    } else {
        return n**3 + sumCubes(n - 1);
    }
}

module.exports = sumCubes;