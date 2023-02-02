function addition(variables) {
    let splitVar = variables.split('+');
    return Number(splitVar[0].charCodeAt(0)) + Number(splitVar[1].charCodeAt(0));
};

module.exports = addition;