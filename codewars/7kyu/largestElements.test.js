const largestElements = require('./largestElements');

test('should return the input array if num is less than the length of the array', () => {
    expect(largestElements(2, [2, 3])).toEqual([2,3]);
});

test('should return the input array if num is less than the length of the array', () => {
    expect(largestElements(5, [2, 3])).toEqual([2,3]);
});

test('should return the largest number in the array', () => {
    expect(largestElements(1, [2, 3])).toEqual([3]);
});

test('should return the largest 2 numbers in the array', () => {
    expect(largestElements(2, [2, 3, 4])).toEqual([3, 4]);
});

