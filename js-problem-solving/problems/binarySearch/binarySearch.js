
function binarySearch(arr, sought) { 
  // Add any parameters you need. Good luck!
  let min = 0;
  let max = arr.length - 1;

  while(min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (arr[mid]===sought)
      return arr.indexOf(arr[mid]);
    else if (arr[mid] < sought)
      min = mid + 1;
    else
      max = mid - 1;
  }
  return -1;
}
