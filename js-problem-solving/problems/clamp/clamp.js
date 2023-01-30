
function clamp(value, lower, upper) { 
  // Add any parameters you need. Good luck!
  if(value > lower && value < upper)
    return value;
  
  if(value < lower)
    return lower;

  if(value > upper)
    return upper;

  return value;
}
