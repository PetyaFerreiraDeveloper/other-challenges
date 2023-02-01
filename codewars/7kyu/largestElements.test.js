const largestElements = require('./largestElements');

test('should return the input array if num is less than the length of the array', () => {
    expect(largestElements(2, [2, 3])).toEqual([2,3]);

});