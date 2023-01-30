
function pick(obj, keys) { 
  // Add any parameters you need. Good luck!
  const solution = {};

  for(let key of keys) {
    if(key in obj) {
      solution[key] = obj[key]
    }
  }
  return solution;
}
