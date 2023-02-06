const closestPair = (num) => {
  
    const isSumPerfect = (a, b) => Math.sqrt(a + b) % 1 == 0;
    const isRestPerfect = (a, b) => Math.sqrt(a - b) % 1 == 0;
    for (let num1 = num - 1; num1 > 1; num1--) {
        for (let num2 = num1 - 1; num2 > 1; num2--) {
            if(isSumPerfect(num1, num2) && isRestPerfect(num1, num2)) {
                return [num1, num2];
            }
        }
    }
    
};

module.exports = closestPair;