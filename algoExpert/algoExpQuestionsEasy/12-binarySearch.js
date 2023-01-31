function binarySearch(array, target) {
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    while (leftPointer <= rightPointer) {
        let medium = Math.floor((rightPointer + leftPointer) / 2);
        if (array[medium] === target) {
            console.log(medium)
            return medium;
        } else if (array[medium] < target) {
            leftPointer = medium + 1;
        } else if (array[medium] > target) {
            rightPointer = medium - 1;
        }
    }
    console.log(-1);
    return - 1;
}

binarySearch([0,1,21,33,45,45,61,71,72,73], 70)