const addition = require('./addition');

test('it works with letter a and b', () => {
    expect(addition('a+b')).toBe(195);
});

test('it works letters a and c', () => {
    expect(addition('a+c')).toBe(196);
});

test('it works letters a and d', () => {
    expect(addition('a+d')).toBe(197);
});

test('it works letters a and e', () => {
    expect(addition('a+e')).toBe(198);
});