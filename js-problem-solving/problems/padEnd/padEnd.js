
function padEnd(phrase, minLength, phrase2) { 
  // Add any parameters you need. Good luck!
  if (minLength <= phrase.length)
    return phrase;
  
  if(!phrase2 && minLength > phrase.length) {
    phrase = phrase.padEnd(minLength, ' ');
    return phrase;
  }

  if(phrase2) {
    phrase = phrase.padEnd(minLength, phrase2);
    return phrase;
  }
}
