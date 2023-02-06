const catsInDrawers = require('./catsInDrawers');

test('it works with 1 and 2', () => {
    expect(catsInDrawers(1, 2)).toBe(1);
});

test('it works with 1 and 4', () => {
    expect(catsInDrawers(1, 4)).toBe(1);
});

test('it works with 1 and 5', () => {
    expect(catsInDrawers(1, 5)).toBe(2);
});