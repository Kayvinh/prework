
function zipObject(keys, values) { 
  // Add any parameters you need. Good luck!
  let obj = {};
  let greater = 0;

  if(keys.length >= values.length) {
    greater = keys.length
  } else {
    greater = values.length;
  }

  for(let i = 0; i < greater; i++){
    if(i === keys.length) {
      break;
    }
    
    obj[keys[i]] = values[i];


  }
    
  return obj;
}
