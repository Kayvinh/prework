
function takeRight(items, n) { 
  // Add any parameters you need. Good luck!
  if(typeof n === 'undefined')
    return [items[items.length - 1]]

  if(n === 0)
    return [];

  if(n > items.length)
    return items;

  for(let i = 0; i < n-1; i++) {
    items.shift();
  }

  return items;
}
