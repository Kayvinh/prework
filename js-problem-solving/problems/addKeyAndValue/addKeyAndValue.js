
function addKeyAndValue(objs, key, value) { 
  // Add any parameters you need. Good luck!
  for(let obj of objs) {
    obj[key] = value;
  }
  return objs;
}
