
function hasNoDuplicates(nums) { 
  // Add any parameters you need. Good luck!

  // Solve first try:
  let dupCheck = [];
  for(let num of nums){
    if(dupCheck.includes(num))
      return false;
    else
      dupCheck.push(num)
  }

  return true;

}
