const whoLikesIt = require('./whoLikesIt');

test('return noone if array is empty', () => {
    expect(whoLikesIt([])).toEqual('no one likes this');
});

test('if one person likes it, return the name of the person', () => {
    expect(whoLikesIt(['John'])).toEqual('John likes this');
});

test('if two people like it, return the names + like this', () => {
    expect(whoLikesIt(['John', 'Ema'])).toEqual('John and Ema like this');
});

test('if three people like it, return the names + like this', () => {
    expect(whoLikesIt(['John', 'Ema', 'Lily'])).toEqual('John, Ema and Lily like this');
});

test('if more than three people like it, return the first two names + number of rest of people + others like this', () => {
    expect(whoLikesIt(['John', 'Ema', 'Lily', 'Ivo', 'Mary'])).toEqual('John, Ema and 3 others like this');
});