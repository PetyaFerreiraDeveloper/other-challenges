const multiplyAll = require('./multiplyAll');

test('should return an array', () => {
    let result = multiplyAll([1, 3, 5]) (2);
    expect(Array.isArray(result)).toBe(true);
});

test('should return same array if multiplier is 1', () => {
    expect(multiplyAll([1, 2]) (1)).toEqual([1, 2]);
});

test('should return array where each item is result of each item of original array multiplied with multiplier', () => {
    expect(multiplyAll([1, 2]) (3)).toEqual([3, 6]);
});