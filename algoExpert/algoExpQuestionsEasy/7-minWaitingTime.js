function findMinWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let sumSoFar = 0;
    let currSum = 0;

    for(let i = 0; i < queries.length - 1; i++) {
        currSum+= queries[i];
        sumSoFar+= currSum;
    }
    console.log(sumSoFar);
    return sumSoFar;
}

findMinWaitingTime([6, 3, 2, 2, 1]);