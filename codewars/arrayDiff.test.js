const arrayDiff = require('./arrayDiff');

test('return arr1, if arr2 is an empty array', () => {
    expect(arrayDiff([1, 2], [])).toEqual([1, 2]);
});

test('return an empty array if arr1 and arr2 are the same', () => {
    expect(arrayDiff([1, 2], [1, 2])).toEqual([]);
});

test('return arr1 if no elements in arr2 exist in arr1', () => {
    expect(arrayDiff([1, 2], [3])).toEqual([1, 2]);
});