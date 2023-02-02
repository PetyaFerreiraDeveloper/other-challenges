const sticks21 = require('./sticks21');

test('returns robot wins', () => {
    expect(sticks21(21)).toBe('Robot wins!')
})