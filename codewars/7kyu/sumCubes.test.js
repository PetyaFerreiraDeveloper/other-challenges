const sumCubes = require('./sumCubes');

test('it works with 1', () => {
    expect(sumCubes(1)).toBe(1);
});

test('it works with 2', () => {
    expect(sumCubes(2)).toBe(9);
});

test('it works with 3', () => {
    expect(sumCubes(3)).toBe(36);
});