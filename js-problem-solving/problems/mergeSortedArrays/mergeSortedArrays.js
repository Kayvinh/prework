
function mergeSortedArrays(a, b) { 
  // Add any parameters you need. Good luck!
  let solution = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      solution.push(a[i]);
      i++;
    } else {
      solution.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    solution.push(a[i]);
    i++;
  }

  while (j < b.length) {
    solution.push(b[j]);
    j++;
  }

  return solution;
}
