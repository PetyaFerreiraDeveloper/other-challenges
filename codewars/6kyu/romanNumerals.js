const romanNumerals = (roman) => {
    const numerals = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };
    let romanArray = roman.split('');
    
    let sum = 0;
    for(let i = 0; i < romanArray.length; i++) {
        if(numerals[romanArray[i]] < numerals[romanArray[i + 1]]) {
            sum += (numerals[romanArray[i + 1]] - numerals[romanArray[i]]);
            i++;
        } else {
            sum += numerals[romanArray[i]];
        }
    }
    return sum;
    
};

romanNumerals('I');


module.exports = romanNumerals;