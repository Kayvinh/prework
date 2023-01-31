
function extractKey(objs, keyName) { 
  // Add any parameters you need. Good luck!
  let names = objs.map((obj) => {
    return obj[keyName];
  });
  return names;
}
