
function createMatrix(col, row) {
  let ans = [];
  // Add any parameters you need. Good luck!
  for(let i = 0; i < row; i++) {
    ans[i] = [];
    for(let j = 0; j < col; j++) {
      ans[i].push(0);
    }
  }
  return ans;
}
