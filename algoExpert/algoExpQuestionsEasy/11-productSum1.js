function productSum(array) {
    const helper = (inputArray, depthCounter = 1) => {
        let sum = 0;
        for (let item of inputArray) {
            if(Array.isArray(item)) {
                sum += helper(item, depthCounter + 1)
            } else {
                sum += item;
            }
        };
        return (depthCounter * sum)
    }

    console.log(helper(array));
    return helper(array);
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
