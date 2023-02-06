const snailCrawlsUp = require('./snailCrawlsUp');

test('it crawls 2meters in 1 day', () => {
    expect(snailCrawlsUp(2, 2, 1)).toBe(1);
});

test('it crawls 3meters in 2 days', () => {
    expect(snailCrawlsUp(3, 2, 1)).toBe(2);
});

test('it crawls 4meters in 3 days', () => {
    expect(snailCrawlsUp(4, 2, 1)).toBe(3);
});

test('it crawls 4110meters in 5 days', () => {
    expect(snailCrawlsUp(10, 3, 1)).toBe(5);
});