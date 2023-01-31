// get only the unique numbers in the array
// sort them
// find the k-th number in the list

function findSmallest(input) {
    let k = 3; // find the third smallest numbers else return null
    let arrayUniqueNum = [];
    let arrayOfNumbers = input;
    let arrayOfNumbersL = arrayOfNumbers.length; 
    for (let i = 0; i < arrayOfNumbersL; i++ ) {
        let currNum = arrayOfNumbers[i];
        if (!arrayUniqueNum.includes(arrayOfNumbers[i])) {
            arrayUniqueNum.push(currNum);
        }
    }
    let sorted = arrayUniqueNum.sort((a, b) => a - b);

    let nthElement = sorted[k - 1]
    console.log(nthElement);
}

findSmallest([2, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1])