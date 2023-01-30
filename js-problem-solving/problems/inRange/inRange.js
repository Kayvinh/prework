function inRange(n, start, end) { 
  // Add any parameters you need. Good luck!
  if(!end) {
    end = start
    start = 0;
  }

  if(start > end) {
    let temp = start;
    let temp2 = end;
    end = temp;
    start = temp2;
  }

  if(n > start && n < end)
    return true;
  
  return false;
}
