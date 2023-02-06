const makeBackronym = (string) => {
    const dict = { 'A': "awesome", 'B': 'beautiful', 'C': 'confident', 'D': 'disturbing', 'E': 'eager', 'F': 'fantastic', 'G': 'gregarious', 'H': 'hippy', 'I': 'ingestable', 'J': 'joke', 'K': 'klingon', 'L': 'literal', 'M': 'mustache', 'N': 'newtonian', 'O': 'oscillating', 'P': 'perfect', 'Q': 'queen', 'R': 'rant', 'S': 'stylish', 'T': 'turn', 'U': 'underlying', 'V': 'volcano', 'W': 'weird', 'X': 'xylophone', 'Y': 'yogic', 'Z': 'zero' };

    let splittedString = string.toUpperCase().split('');
    let result = splittedString.map(letter => dict[letter]);
    return result.join(' ');
};

module.exports = makeBackronym;