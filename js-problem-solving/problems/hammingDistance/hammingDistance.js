
function hammingDistance(s1, s2) { 
  // Add any parameters you need. Good luck!
  if(s1.length !== s2.length)
    return NaN;

  
  // Copied from wikipedia python example
  let dist_counter = 0;
  for(let i = 0; i < s1.length; i++) {
    if(s1[i].toLowerCase() !== s2[i].toLowerCase()) {
      dist_counter++
    }
  }

  return dist_counter;
}
