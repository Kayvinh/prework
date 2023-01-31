
function keyCount(objs) { 
  // Add any parameters you need. Good luck!
  let solution = {};

  // for(let obj of objs) {
  //   for(let key in obj) {
  //     if(key in solution) {
  //       solution[key]++;
  //     } else {
  //       solution[key] = 1;
  //     }
  //   }
  // }


  // using forEach
  objs.forEach(obj => {
    Object.keys(obj).forEach((key) => {
      if(key in solution)
        solution[key]++;
      else
        solution[key] = 1;
    })
  });

  return solution;
}
