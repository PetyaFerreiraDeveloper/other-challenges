function findSubsequentNum(input) {
    let evenNumDivider = '*';
    let oddNumDivider = '-';
    let arrayOfNum = input.split('');
    let arrayOfNumL = arrayOfNum.length;
    let newArr = [];
    for (let i = 0; i < arrayOfNumL - 1; i++) {
        let currNum = Number(arrayOfNum[i]);
        let nextNum = Number(arrayOfNum[i + 1]);
        newArr.push(currNum);
        if(checkIfMatch(currNum, nextNum) === 'even') {
            newArr.push(evenNumDivider);
        } else if (checkIfMatch(currNum, nextNum) === 'odd') {
            newArr.push(oddNumDivider);
        }
    }
    let lastEl = arrayOfNum.slice(-1)[0];
    newArr.push(lastEl);
    console.log(newArr);
}

function checkIfMatch(num1, num2) {
    if((num1 % 2) === 0 && (num2 % 2) === 0) {
        return 'even';
    } else if ((num1 % 2) !== 0 && (num2 % 2) !== 0){
        return 'odd';
    }
}

findSubsequentNum('214653786754')