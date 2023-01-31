function printRiverSizes(input) {
    let arrOfRivers = [];

    for(let i = 0; i < input.length; i++) {
        let countHor = 0;
        for(let j = 0; j < i.length; j++) {
            if(i[j] === 1) {
                countHor++;
                for (let z = i; z < input.length; z++) {

                    if(z[j] === 1) {
                        countHor++;
                    }
                }
            }
        }
    }
}

printRiverSizes([
    [1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0],
])