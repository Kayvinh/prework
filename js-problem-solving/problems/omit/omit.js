
function omit(obj, keys) { 
  // Add any parameters you need. Good luck!
  for(let key of keys){
    if(key in obj) {
      delete obj[key];
    }
  }
  return obj;
}
