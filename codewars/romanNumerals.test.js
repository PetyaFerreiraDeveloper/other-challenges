const romanNumerals = require('./romanNumerals');

test('it should return 1', () => {
    expect(romanNumerals('I')).toEqual(1);
});

test('it should return 2', () => {
    expect(romanNumerals('II')).toEqual(2);
});

test('it should return 3', () => {
    expect(romanNumerals('III')).toEqual(3);
});

test('it should return 4', () => {
    expect(romanNumerals('IV')).toEqual(4);
});

test('it should return 2567', () => {
    expect(romanNumerals('MMDLXVII')).toEqual(2567);
});


