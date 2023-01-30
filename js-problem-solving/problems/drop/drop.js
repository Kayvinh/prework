
function drop(items, numDrop) { 
  // Add any parameters you need. Good luck!

  let solution = [...items];
  if(numDrop > items.length)
    return [];
  
  if(typeof numDrop === 'undefined') {
    let solution = [];
    for(let i = 1; i < items.length; i++) {
      solution.push(items[i]);
    }
    return solution;
  }

  if(numDrop === 0) {
    console.log(solution)
    return items;
  }

  for(let i = 0; i < numDrop; i++) {
    solution.shift()
  }

  return solution;

}
