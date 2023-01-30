
function aperture(n, items) { 
  // Add any parameters you need. Good luck!
  if (n > items.length || n < 1) {
    return [];
  }

  let subArrays = [];

  for (let i = 0; i <= items.length - n; i++) {
      subArrays.push(items.slice(i, i + n));
  }

  return subArrays;
}
