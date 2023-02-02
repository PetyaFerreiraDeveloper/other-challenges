// function covfefe(str) {
//   const searchWord = "coverage";
//   const replacingString = " covfefe";
//   if (!str.includes(searchWord)) {
//     return str + replacingString;
//   } else {
//     return str.split(searchWord).join(replacingString.trim());
//   }
// }

//Using regex
function covfefe(str) {
  const replacingString = " covfefe";
  const regex = /coverage/g;
  return regex.test(str)
    ? str.replace(regex, replacingString.trim())
    : str + replacingString;
}

module.exports = covfefe;
