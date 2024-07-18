const mike = {
  name : "Mike",
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

// bind는 mike를 항상 this로 받음 

const updateMike = update.bind(mike);

updateMike(1990, "police");
console.log(mike); // { name: 'Mike', birthYear: 1990, occupation: 'police' }
