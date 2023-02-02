const covfefe = require('./covfefe');

test('if empty string is given, return " covfefe"', () => {
    expect(covfefe('')).toBe(' covfefe');
});

test('if coverage is not in string return string concatenated with " covfefe" at the end', () => {
    expect(covfefe('abc')).toBe('abc covfefe');
});

test('if coverage exists in one place in string return string and replace coverage with " covfefe"', () => {
    expect(covfefe('abcoverageabcoverage')).toBe('abcovfefeabcovfefe');
});