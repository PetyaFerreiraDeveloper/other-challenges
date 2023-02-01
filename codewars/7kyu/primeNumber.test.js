const primeNumber = require('./primeNumber');

test('is 2 prime number', () => {
    expect(primeNumber(2)).toBe(true);
});

test('is 3 prime number', () => {
    expect(primeNumber(3)).toBe(true);
});

test('is 4 prime number', () => {
    expect(primeNumber(4)).toBe(false);
});

test('is 5 prime number', () => {
    expect(primeNumber(5)).toBe(true);
});

test('is 6 prime number', () => {
    expect(primeNumber(6)).toBe(false);
});

test('is -1 prime number', () => {
    expect(primeNumber(-1)).toBe(false);
});