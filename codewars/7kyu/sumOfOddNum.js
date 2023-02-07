const sumOfOddNum = (n) => {
    let lineStart = 1;
    let lineEnd = 1;
    let currLineSum = 1;
    for (let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            lineStart += 2;
        }
    }
};

module.exports = sumOfOddNum;