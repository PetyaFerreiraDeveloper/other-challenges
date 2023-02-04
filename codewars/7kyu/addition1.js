
function addition1(variables) {
    let splitVar = variables.split('+');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return Number(alphabet.indexOf(splitVar[0])) + Number(alphabet.indexOf(splitVar[1])) + 2;
};

module.exports = addition1;