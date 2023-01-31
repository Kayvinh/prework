
function hasCertainKey(objs, keyName) { 
  // Add any parameters you need. Good luck!
  return objs.every((obj) => {
    return obj.hasOwnProperty(keyName)
  });
}
