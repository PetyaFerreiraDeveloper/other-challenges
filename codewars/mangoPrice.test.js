const mangoPrice = require('./mangoPrice');

test('it calculates price for 2 mangoes', () => {
    expect(mangoPrice(2, 3)).toEqual(6);
});

test('it calculates price for 3 mangoes', () => {
    expect(mangoPrice(3, 3)).toEqual(6);
});

test('it calculates price for 9 mangoes', () => {
    expect(mangoPrice(9, 5)).toEqual(30);
});
