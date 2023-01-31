function productSum(array, multiplier = 1) {
    // give a multiplier of 1 as one of the function arguments
  // initialize variable sum = 0
  // iterate through the array on which we are calling the productSum method
  // check if the element is an array

  let sum = 0;

  for (let item of array) {
    if (Array.isArray(item)) {
        sum += productSum(item, multiplier + 1);
    } else {
        sum += item;
    }
  }
  console.log('mult:', multiplier, 'sum:', sum * multiplier);
  return sum * multiplier;
  
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
