const spinWords = require('./spinWords');

// test if input is only one word shorter than five characters
// test if input is one word longer than five char
// test if there are spaces in the string
test('it should not revert if string is one word shorter than five char', () => {
    expect(spinWords('hell')).toBe('hell');
});

test('it should revert if string is one word longer than four char', () => {
    expect(spinWords('hello')).toBe('olleh');
});

test('if string has more words, revert only the five or more characters', () => {
    expect(spinWords('hello my world')).toBe('olleh my dlrow');
});