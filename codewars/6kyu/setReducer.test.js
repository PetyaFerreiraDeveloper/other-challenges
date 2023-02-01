const setReducer = require('./setReducer');

test('reduce an array of tree equal elements', () => {
    expect(setReducer([3, 3, 3])).toBe(3);
});

test('reduce an array of four equal elements', () => {
    expect(setReducer([3, 3, 3, 3])).toBe(4);
});

test('reduce an array of tree different elements', () => {
    expect(setReducer([1, 2, 3])).toBe(3);
});