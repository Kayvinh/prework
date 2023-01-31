
function sumLessThan(nums, maxNum) { 
  // Add any parameters you need. Good luck!
  let sum = 0;

  for(let num of nums) {
    if(num > maxNum) 
      return sum;

    if(sum < maxNum)
      sum += num
    else
      return sum;
  }
  return sum;
}
