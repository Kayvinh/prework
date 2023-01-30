
function union(...args) { 
  // Add any parameters you need. Good luck!
  let solution = [];

  for(let i = 0; i < args.length; i++) {
    for(let j = 0; j < args[i].length; j++) {
      if(!solution.includes(args[i][j]))
        solution.push(args[i][j])
    }
  }
  return solution;
}
