
function upperFirst(letters) { 
  // Add any parameters you need. Good luck!

  if(letters === ''){
    return '';
  }

  let firstLetter = letters[0].toUpperCase();
  let solution = letters.slice(1,letters.length)

  return firstLetter + solution;
}
