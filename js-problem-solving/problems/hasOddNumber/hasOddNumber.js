
function hasOddNumber(nums) { 
  // Add any parameters you need. Good luck!
  let hasOdd = nums.some((val) => {
    return val % 2 === 1;
  });
  
  return hasOdd;
}
