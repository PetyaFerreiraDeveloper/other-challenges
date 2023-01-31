function isValidSubsequence(array, sequence) {
  // Write your code here.
  let lastElIndex = 0;
  for (let i = 0; i < sequence.length; i++) {
    let currEl = sequence[i];
    let elIndex = array.indexOf(currEl);

    if (elIndex === -1) {
      console.log("not a subsequent");
      return false;
    }

    if (elIndex < lastElIndex) {
      console.log("not a subsequent");
      return false;
    } else {
      array.splice(elIndex, 1, Symbol(currEl));
      lastElIndex = elIndex;
    }
  }
  
  console.log("is a subsequent");
  return true;
}

isValidSubsequence([1, 2, 3, 5, 6], [1, 5, 2]);
