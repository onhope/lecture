const mike = {
  name : "Mike",
};

const tom = {
  name : "Tom",
};

function showThisName(){
  console.log(this.name); // this는 window를 가리키므로 undefined  출력
}

showThisName(); // undefined
showThisName.apply(mike); // Mike
showThisName.apply(tom); // Tom

function update(birthYear, occuption) {
  this.birthyear = birthYear;
  this.occuption = occuption;
};

update.apply(mike, [1990, 'singer']);
console.log(mike); // { name: 'Mike', birthyear: 1990, occuption: 'singer' }

update.apply(tom, [2002, 'teacher']);
console.log(tom); // { name: 'Tom', birthyear: 2002, occuption: 'teacher' }