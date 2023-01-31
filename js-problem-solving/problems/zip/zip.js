
function zip(...args) { 
  // Add any parameters you need. Good luck!

  let solution = [];

  for(let i = 0; i < args[0].length; i++) {
    let newArr = [];
    for(let j = 0; j < args.length; j++) {
      newArr.push(args[j][i]);
    }
    solution.push(newArr);
  }
  
  return solution;
}
