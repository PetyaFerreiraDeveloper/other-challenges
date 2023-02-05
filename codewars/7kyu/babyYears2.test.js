const babyYears2 = require('./babyYears2');

test('return calm before storm if Baby is not there', () => {
    let inputWithoutBaby = [
        [ 'o', '~', '~', '~', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
        ]
    expect(babyYears2(inputWithoutBaby)).toBe("Calm before the storm");
});

test('return calm before storm if there is no sent', () => {
    let inputWithoutBaby = [
        [ 'B', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
        ]
    expect(babyYears2(inputWithoutBaby)).toBe("Calm before the storm");
});