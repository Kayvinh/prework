function rangeInArray(nums, start=0, end = nums.length -1) { 
  // Add any parameters you need. Good luck!
  let sum = 0;
  
  if (end > nums.length)
    end = nums.length - 1;

  for(let i = start; i <= end; i++) {
    sum += nums[i];
  }
  return sum;
}