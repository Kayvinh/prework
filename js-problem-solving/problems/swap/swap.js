
function swap(items, index1, index2) { 
  // Add any parameters you need. Good luck!

  let tmp = items[index1]
  items[index1] = items[index2]
  items[index2] = tmp;

  return items;
}
