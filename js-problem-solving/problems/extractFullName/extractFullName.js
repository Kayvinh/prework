
function extractFullName(people) { 
  // Add any parameters you need. Good luck!
  let fullName = people.map((val) => {
    console.log(val)
    return `${val.first} ${val.last}`;
  });
  return fullName;
}
