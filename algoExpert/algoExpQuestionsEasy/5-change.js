function nonConstructibleChange(coins) {
  // Write your code here.
  // took me time to understand the challenge
  // task - find the minimum number that can not be represented as a sum of any of the numbers in the array

  // THE DIFFICULT BUT MORE INTUITIVE WAY TO SOLVE IT:
  // sort the array
  // find the sum of all numbers in the array
  // make a loop starting at 1 and ending at the sum of all elements in the array
  // in the sorted array check if the number from the loop exists
  // if the number is not in array - check if summing any of the array elements adds up to the current loop number
  // if not this is the minimum required number
  // if yes - continue to next number from the loop

  // EASIER WAY TO SOLVE IT
  // sort the array
  // loop through the sorted array
  // keep record of the sum of numbers in the array on each iteration
  // if the next number in the array is bigger than the sum so far + 1, then the minimum change we can create is current sum + 1
  //

  if (coins.length === 0) {
    return 1;
  }

  let sorted = coins.sort((a, b) => a - b);
  let sumOfNumbersSoFar = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (!(sorted[i] > sumOfNumbersSoFar + 1)) {
      sumOfNumbersSoFar += sorted[i];
    } else if (sorted[i] > sumOfNumbersSoFar + 1) {
      console.log(sumOfNumbersSoFar + 1);
      return sumOfNumbersSoFar + 1;
    }
  }
  console.log(sumOfNumbersSoFar + 1);
  return sumOfNumbersSoFar + 1;
}

nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
