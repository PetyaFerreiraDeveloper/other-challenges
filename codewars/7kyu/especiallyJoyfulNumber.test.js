const joyfulNumber = require('./especiallyJoyfulNumber');

test('it works with 1', () => {
    expect(joyfulNumber(1)).toBe(false);
});

test('it works with 2', () => {
    expect(joyfulNumber(2)).toBe(false);
});

test('it works with 1729', () => {
    expect(joyfulNumber(1729)).toBe(true);
});