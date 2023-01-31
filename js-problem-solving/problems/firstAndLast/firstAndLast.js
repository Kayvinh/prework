
function firstAndLast(words) { 
  // Add any parameters you need. Good luck!
  let solution = [];
  for(let i = 0; i < words.length; i++) {
    solution.push(words[i][0] + words[i][words[i].length - 1]);
  }
  return solution;
}
