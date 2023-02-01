const arrayDiff = require('./arrayDiff');

describe('Test the function', () => {
    test('test if arr2 is empty, in this case return arr1', () => {
        expect(arrayDiff([1, 2], [])).toEqual([1, 2]);
    });
    test('test if both arrays are the same and return empty array', () => {
        expect(arrayDiff([1, 2], [1, 2])).toEqual([]);
    });
    test('if element from arr2 exists in arr1, return arr1 with all instances of the element from arr2 removed from it', () => {
        // arrange 
        let arr1 = [1, 2, 3];
        let arr2 = [3];
        let expected = [1, 2]

        // act
        let actual = arrayDiff(arr1, arr2);

        // assert
        expect(actual).toEqual(expected);
    })
})