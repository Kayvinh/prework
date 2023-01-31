
function twoArrayObject(keys, values) { 
  // Add any parameters you need. Good luck!
  let solution = {};
  for(let i = 0; i < keys.length; i++) {
    if(values[i] === undefined)
      solution[keys[i]] = null;
    else
      solution[keys[i]] = values[i];
  }
  return solution;
}
