
function unzip(matrix) { 
  // Add any parameters you need. Good luck!

  // i=0 [1,2]    matrix[0][0] = 1    matrix[0][1] = 2
  // i=1 [3,4]    matrix[1][0] = 3    matrix[1][1] = 4

  // i=0 [1,2,3]    matrix[0][0] = 1    matrix[0][1] = 2    matrix[0][2] = 3
  // i=1 [4,5,6]    matrix[1][0] = 4    matrix[1][1] = 5    matrix[1][2] = 6
  let solution = [];

  for(let i = 0; i < matrix[0].length; i++) {
    let newArr = [];
    for(let j = 0; j < matrix.length; j++) {
      newArr.push(matrix[j][i]);
    }
    solution.push(newArr);
  }
  
  return solution;
}
