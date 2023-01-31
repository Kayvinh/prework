
function hasAZero(num) { 
  // Add any parameters you need. Good luck!
  let numString = num.toString();
  let numArr = numString.split('');

  let hasZero = numArr.some((val) => {
    return val === '0';
  });

  return hasZero;
}
