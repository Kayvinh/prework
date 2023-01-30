
function nth(items, idx) { 
  // Add any parameters you need. Good luck!

  if(idx < 0){
    items.reverse()
    return items[Math.abs(idx) - 1]
  }

  for(let i = 0; i < items.length; i++) {
    if(i === idx)
      return items[i];
  }

}
