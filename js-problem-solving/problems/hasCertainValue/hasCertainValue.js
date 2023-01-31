
function hasCertainValue(objs, keyName, searchValue) { 
  // Add any parameters you need. Good luck!

  return objs.every((obj) => {
    return obj[keyName] === searchValue;
  })
}
