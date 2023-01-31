function arrayDiff2(arr1, arr2) {
    // if(arr2.length === 0) {
    //     console.log(arr1);
    //     return arr1;
    // }
    // if(JSON.stringify(arr1) === JSON.stringify(arr2)) {
    //     console.log([]);
    //     return [];
    // }
    for(let el of arr2) {
        arr1 = arr1.filter(el1 => el1 !== el);
    }
    console.log(arr1);
    return arr1;
    
}

arrayDiff2([1, 2, 3], [])

