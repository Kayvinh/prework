
function filterByKey(arr, keyName) { 
  // Add any parameters you need. Good luck!
  let filtered = arr.filter((obj) => {
    // if(keyName in obj){
    //   return true;
    // }
    return obj.hasOwnProperty(keyName);
  });
  //return arr.filter(obj => obj.hasOwnProperty(keyName));
  return filtered;
}
