
function validAnagram(w1, w2) { 
  // Add any parameters you need. Good luck!
  let w1Arr = w1.split('')
  let w2Arr = w2.split('');

  w1Arr.sort()
  w2Arr.sort()

  return w1Arr.join() === w2Arr.join();
}
