
function sameFrequency(num1, num2) { 
  // Add any parameters you need. Good luck!
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  // Early out
  if(strNum1.length !== strNum2.length)
    return false;

  // freq counter
  const count = {};

  for(let val of strNum1) {
    // count[val] in count ? count[val]++ : count[val] = 1;
    if(count[val] in count)
      count[val]++;
    else
      count[val] = 1;
  }

  for(let val of strNum2) {
    if(!count[val] in count)
      return false;
    count[val]--;
  }
  return true;
}
