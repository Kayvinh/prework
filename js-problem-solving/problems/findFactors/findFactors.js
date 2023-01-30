
function findFactors(num) { 
  // Add any parameters you need. Good luck!
  let solution = [];
  for(let i = 0; i <= num; i++) {
    if(num % i === 0)
      solution.push(i);
  }
  return solution;
}
