
function take(arr, count) { 
  // Add any parameters you need. Good luck!
  let solution = [];

  if(count > arr.length)
    return arr;
  
  if(typeof count === 'undefined')
    return [arr[0]];
  
  if(count === 0)
    return [];
  
  for(let i = 0; i < count; i++) {
    solution.push(arr[i])
  }

  return solution;
}
