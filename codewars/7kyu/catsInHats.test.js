const catsInHats = require('./catsInHats');

test('with 0 cats', () => {
    expect(catsInHats(0)).toBe('2000000.000');
});

test('with 1 cats', () => {
    expect(catsInHats(1)).toBe('2800000.000');
});

test('with 7 cats', () => {
    expect(catsInHats(7)).toBe('3331148.800');
});