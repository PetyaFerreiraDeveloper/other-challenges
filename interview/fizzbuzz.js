// const fizzBuzz = (N) => {
//   let arr = [];
//   for (let i = 1; i <= N; i++) {
//     let newVariable = '';
//     if (i % 3 == 0) newVariable += 'Fizz';
//     if (i % 5 == 0) newVariable += 'Buzz';
//     if (newVariable == '') newVariable = i;
//     arr.push(newVariable);
//   }
//   console.log(arr);
//   return arr;
// };

// fizzBuzz(5);

const fizzBuzz1 = (N) => {
  const lookup = {
    3: 'Fizz',
    5: 'Buzz'
  };
  let arr = [];
  for(i = 1; i <= N; i++) {
    let newVariable = '';
    for(let key in lookup) {
        if (i % key == 0) {
            newVariable += lookup[key];
        }
    }
    if (newVariable == '') {
        newVariable = i;
    }
    arr.push(newVariable)
  }
  return arr;
};

// module.exports = fizzBuzz;
module.exports = fizzBuzz1;
