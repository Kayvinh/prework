
function extractValue(objs, keyName) { 
  // Add any parameters you need. Good luck!
  let solution = [];
  for(let obj of objs) {
    if(keyName in obj) {
      solution.push(obj[keyName]);
    }
  }
  return solution;
}
