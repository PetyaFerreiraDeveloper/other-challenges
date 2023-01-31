function spinWords(str) {
//   if (str.indexOf(" ") == -1) {
//     if (str.length < 5) {
//       return str;
//     } else {
//       let split = str.split("");
//       split = split.reverse();
//       let result = split.join("");
//       return result;
//     }
//   }

  function reverseStr(str) {
    let split = str.split("");
    split = split.reverse();
    let result = split.join("");
    return result;
  }

  let splitted = str.split(" ");
  let newArr = splitted.map(el => {
    if(el.length < 5) {
        return el;
    } else {
        return reverseStr(el);
    }
  });
  return newArr.join(' ');
}

module.exports = spinWords;
