function joyfulNumber(n) {
   
    let sumOfDigits = sumDigits(n);
    isHarshadNumber = n % sumOfDigits === 0;
    if(isHarshadNumber) {
        let reversedSumOfDigits = sumOfDigits.toFixed(0).split('').reverse().join('');
        (sumOfDigits * Number(reversedSumOfDigits)) == n ? console.log(true) : console.log(false);
        console.log(sumOfDigits * Number(reversedSumOfDigits));
        return (sumOfDigits * Number(reversedSumOfDigits)) == n ? true : false;
    } else {
        console.log('not harshadNumber');
        return false;
    }

    function sumDigits(num) {
        let sumOfDigits1 = 0;
        let nAsString = `${num}`;
        for(let i = 0; i < nAsString.length; i++) {
            sumOfDigits1 += Number(nAsString[i]);
        }
        return sumOfDigits1;
    }
}
joyfulNumber(1998);


module.exports = joyfulNumber;