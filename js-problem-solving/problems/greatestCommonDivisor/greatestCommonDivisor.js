
function greatestCommonDivisor(num1, num2) { 
  // Add any parameters you need. Good luck!
  let gcd = 0;
  for(let i = 0; i < num2; i++) {
    if(num1 % i === 0 && num2 % i === 0)
      gcd = i;
  }
  return gcd;
}
