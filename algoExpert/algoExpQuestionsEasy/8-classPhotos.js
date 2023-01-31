function classPhotos(redShirtsHeight, blueShirtsHeight) {
    redShirtsHeight.sort((a, b) => b - a);
    blueShirtsHeight.sort((a, b) => b - a);
    let backRow;
    let frontRow;
    if(redShirtsHeight[0] > blueShirtsHeight[0]) {
        backRow = redShirtsHeight;
        frontRow = blueShirtsHeight;
    } else if (redShirtsHeight[0] < blueShirtsHeight[0]) {
        backRow = blueShirtsHeight;
        frontRow = redShirtsHeight;
    } else {
        console.log(false);
        return false;
    }

    for(let i = 0; i < backRow.length; i++) {
        if(backRow[i] <= frontRow[i]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}


//classPhotos([4,5], [5,4]);

function classPhotosBetter(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);

    let blueBack = true;
    let redBack = true;

    for(let i = 0; i < redShirtHeights.length; i++) {
        if(redShirtHeights[i] <= blueShirtHeights[i]) {
            redBack = false;
        }

        if(redShirtHeights[i] >= blueShirtHeights[i]) {
            blueBack = false;
        }
    }

    console.log(blueBack || redBack);
    return blueBack || redBack;
}

classPhotosBetter([4,5,2,1], [5,4,7,8])