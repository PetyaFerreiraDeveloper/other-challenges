function tandem(redShirtSpeeds, blueShirtSpeeds, fastest) {
    if(fastest) {
        let concatArray = redShirtSpeeds.concat(blueShirtSpeeds);
        concatArray.sort((a, b) => b - a);
        let maxSum = 0;
        for(let i = 0; i < redShirtSpeeds.length; i++) {
            maxSum+= concatArray[i];
        };
        console.log(maxSum);
        return maxSum;
    } else {
        let minSum = 0;
        redShirtSpeeds.sort((a, b) => b - a);
        blueShirtSpeeds.sort((a, b) => b - a);
        for(let i = 0; i < redShirtSpeeds.length; i++) {
            let nextToAdd = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
            minSum+= nextToAdd;
        }
        console.log(minSum);
        return minSum;
    }
}

tandem([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], true)

function tandemSmart(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => b - a);
    blueShirtSpeeds.sort((a, b) => fastest ? a - b : b - a);
    let result = 0;

    for(let i = 0; i < redShirtSpeeds.length; i++) {
        result += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
    console.log(result);
    return result;
}

tandemSmart([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], true)