
function reverseVowels(str) { 
  // Add any parameters you need. Good luck!

  let vowels = "aeiouAEIOU";
  let strArr = str.split("");
  let left = 0;
  let right = strArr.length - 1;
  while (left < right) {
      while (left < right && !vowels.includes(strArr[left])) {
        left++;
      }

      while (left < right && !vowels.includes(strArr[right])) {
        right--;
      }

    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
  
    return strArr.join("");
}
