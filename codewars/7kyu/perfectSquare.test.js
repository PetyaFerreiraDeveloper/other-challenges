const perfectSquare = require('./perfectSquare');

test('it returns true with 0', () => {
    expect(perfectSquare(0)).toBe(true);
});

test('it returns true with 1', () => {
    expect(perfectSquare(1)).toBe(true);
});

test('it returns false with 2', () => {
    expect(perfectSquare(2)).toBe(false);
});

test('it returns false with 14', () => {
    expect(perfectSquare(14)).toBe(false);
});
test('it returns true with 16', () => {
    expect(perfectSquare(16)).toBe(true);
});