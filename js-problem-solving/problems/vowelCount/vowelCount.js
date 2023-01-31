
function vowelCount(letters) { 
  // Add any parameters you need. Good luck!
  let vowels = 'AEIOUaeiou';
  let vowelObj = {};

  for(let letter of letters) {
    if(vowels.includes(letter)) {
      if(letter in vowelObj) {
        vowelObj[letter.toLowerCase()]++
      } else {
        vowelObj[letter.toLowerCase()] = 1;
      }
    }
  }
  
  return vowelObj;
}
