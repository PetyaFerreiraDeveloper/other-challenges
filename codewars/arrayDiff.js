function arrayDiff(arr1, arr2) {
    if(arr2.length === 0) {
        return arr1;
    }
    if(JSON.stringify(arr1) === JSON.stringify(arr2)) {
        return [];
    }
    
   

}

module.exports = arrayDiff;