const replaceWith = require('./replaceWith');

test('if input is letter a return 1', () => {
    expect(replaceWith('a')).toEqual('1');
});

test('if input is letter A return 1', () => {
    expect(replaceWith('A')).toEqual('1');
});

test('if input is letter b return 2', () => {
    expect(replaceWith('b')).toEqual('2');
});

test('if input is letter C return 2', () => {
    expect(replaceWith('C')).toEqual('3');
});

test('if input has more than one char return their position in alphabet', () => {
    // arrange
    let input = 'abc';
    let expected = '1 2 3';

    // act
    let actual = replaceWith(input);

    // assert
    expect(actual).toEqual(expected);
});