
function findInObj(peoples, key, value) { 
  // Add any parameters you need. Good luck!
  for(let people of peoples) {
    console.log(people)
    if(people[key] === value){
      return people;
    }
  }
  return undefined;
}
