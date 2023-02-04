const addition1 = require('./addition1');

test('it works with letter a and b', () => {
    expect(addition1('a+b')).toBe(3);
});

test('it works with letter d and g', () => {
    expect(addition1('d+g')).toBe(11);
});

