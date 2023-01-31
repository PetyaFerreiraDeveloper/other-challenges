const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz tests', () => {
    test('when given a number N, it returns an array from 1 to N', () => {
        // arange
        let N = 2;
        let expected = [1, 2];

        // act
        let actual = fizzBuzz(N);

        // assert
        expect(actual).toEqual(expected);

    });

    test('if returned number in array divisible by 3, print "Fizz"', () => {
        let N = 3;
        let expected = [1, 2, 'Fizz'];
        let actual = fizzBuzz(N);
        expect(actual).toEqual(expected);
    });

    test('if returned number in array divisible by 3, print "Fizz"', () => {
        let N = 4;
        let expected = [1, 2, 'Fizz', 4];
        let actual = fizzBuzz(N);
        expect(actual).toEqual(expected);
    });

    test('if returned number in array divisible by 5, print "Buzz"', () => {
        let N = 6;
        let expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz'];
        let actual = fizzBuzz(N);
        expect(actual).toEqual(expected);
    });

    test('if returned number in array divisible by 15, print "FizzBuzz"', () => {
        let N = 18;
        let expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz'];
        let actual = fizzBuzz(N);
        expect(actual).toEqual(expected);
    });
})