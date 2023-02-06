const makeBackronym = require('./makeBackronym');

test('it works with a', () => {
    expect(makeBackronym('a')).toBe('awesome');
});
test('it works with ab', () => {
    expect(makeBackronym('ab')).toBe('awesome beautiful');
});
test('it works with dgm', () => {
    expect(makeBackronym('dgm')).toBe('disturbing gregarious mustache');
});