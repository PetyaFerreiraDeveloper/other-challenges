const catsInDrawers = (start, finish) => {
  let counter = 0;
  let distance = finish - start;
  let numBigJumps = Math.floor(distance / 3);
  counter = numBigJumps + distance % 3;

  return counter;
};

module.exports = catsInDrawers;
