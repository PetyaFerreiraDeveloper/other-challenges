const asperandPixelCounter = require('./asperandPixelCounting');


test('count if k = 1, return 11', () => {
    expect(asperandPixelCounter(1)).toBe(11);
});

test('count if k = 2, return 18', () => {
    expect(asperandPixelCounter(2)).toBe(18);
});
