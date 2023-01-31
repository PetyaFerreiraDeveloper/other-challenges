const arrayDiff = require('./arrayDiff');

describe('Test the function', () => {
    test('test if arr2 is empty, in this case return arr1', () => {
        expect(arrayDiff([1, 2], [])).toEqual([1, 2]);
    })
})