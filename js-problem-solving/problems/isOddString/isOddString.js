
function isOddString(str) { 
  // Add any parameters you need. Good luck!
  let sum = 0;
  for(let letter of str) {
    sum += letter.charCodeAt(letter)
  }

  if(sum % 2 === 1)
    return true;
  else
    return false;
}
