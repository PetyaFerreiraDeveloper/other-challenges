const closestPair = require('./closestPairToNum');

test('it works 10', () => {
    expect(closestPair(10)).toEqual([5, 4]);
});

test('it works 30', () => {
    expect(closestPair(30)).toEqual([29, 20]);
});