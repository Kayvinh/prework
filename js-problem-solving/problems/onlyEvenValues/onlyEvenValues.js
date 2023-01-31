
function onlyEvenValues(nums) { 
  // Add any parameters you need. Good luck!
  let solution = [];
  for(let num of nums){
    if(num % 2 === 0)
      solution.push(num)
  }
  return solution;
}
