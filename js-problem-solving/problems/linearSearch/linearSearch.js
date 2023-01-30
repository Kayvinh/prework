
function linearSearch(item, sought) { 
  // Add any parameters you need. Good luck!
  for(let i = 0; i < item.length; i++) {
    if(item[i] === sought)
      return i;
  }
  return -1;
}
