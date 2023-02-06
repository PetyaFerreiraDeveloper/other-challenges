const truncate = require('./truncate');

test('it works code 1', () => {
    expect(truncate('code', 1)).toBe('c...');
});

test('it works code 1', () => {
    expect(truncate('c', 1)).toBe('c');
});

test('it works code 2', () => {
    expect(truncate('code', 2)).toBe('co...');
});

test('it works code 3', () => {
    expect(truncate('code', 3)).toBe('cod...');
});

test('return with 4', () => {
    expect(truncate('code', 4)).toBe('code');
});

test('return with 7', () => {
    expect(truncate('codewars', 7)).toBe('code...');
});

test('return with 9', () => {
    expect(truncate('codewars', 9)).toBe('codewars');
});

test('return with 14', () => {
    expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).toBe('A-tisket...');
});