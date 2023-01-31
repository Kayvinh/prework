
function hasOnlyOddNumbers(nums) { 
  // Add any parameters you need. Good luck!
  let onlyOdds = nums.every(val => {
    return val % 2 === 1;
  })

  return onlyOdds;
}
