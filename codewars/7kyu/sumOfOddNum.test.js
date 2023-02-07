const sumOfOddNum = require('./sumOfOddNum');

test('it works', () => {
    expect(sumOfOddNum(1)).toBe(1);
});

test('return 8', () => {
    expect(sumOfOddNum(2)).toBe(8);
});