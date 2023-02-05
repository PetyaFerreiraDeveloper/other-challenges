function babyYears2(p) {
    let positionOfBInLine = 0;
    let verticalArray = [];

    for(let i = 0; i < p.length; i++) {
        if(p[i].join('').includes('B~~~') || p[i].join('').includes('~~~B')) {
            console.log('You disgust me!');
            return 'You disgust me!';
        }
        if(p[i].includes('B')) {
            positionOfBInLine = p[i].indexOf('B');
        }
    }

    for(let i = 0; i < p.length; i++) {
        verticalArray.push(p[i][positionOfBInLine]);
    }

    let hasSmell = verticalArray.join('').includes('B~~~') || verticalArray.join('').includes('~~~B');

    hasSmell ? console.log('Get the wipes') : console.log('Calm before the storm');
    return hasSmell ? 'Get the wipes!' : 'Calm before the storm';

}

babyYears2([
    [ 'B', '~', 'o', '~', 'o', 'o', 'o'],
    [ '~', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ '~', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ '~', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ])


module.exports = babyYears2;