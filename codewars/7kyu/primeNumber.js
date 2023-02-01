function primeNumber(num) {
  if (num <= 1) {
    console.log(false);
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        console.log(false);
        return false;
      }
    }
    console.log(true);
    return true;
  }
}

primeNumber(150000000011);

module.exports = primeNumber;
