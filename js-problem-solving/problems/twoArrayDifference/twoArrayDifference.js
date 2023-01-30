
function twoArrayDifference(arr1, arr2) { 
  // Add any parameters you need. Good luck!
  let solution = [];

  for(let i = 0; i < arr1.length; i++) {
    if(!arr2.includes(arr1[i]))
      solution.push(arr1[i]);
  }
  return solution;
}
