
function isPrime(num) { 
  // Add any parameters you need. Good luck!
  if(num <= 1 || isNaN(num))
    return false;

  for(let i = 2; i < num; i++) {
    if(num % i === 0)
      return false;
  }

  return true;
}
