function makeObject(name, age) {
  return {
    name : name,
    age : age,
    hobby : 'football',
  }
}

const mike = makeObject('mike', 30);
console.log(mike); //age: 30, hobby : "football", name : "mike"

console.log('age' in mike); // true
console.log('birthDay' in mike); // false

function isAdult(user) {
  if(user.agr < 20) {
    return false;
  } 
  return true;
}

const suji = {
  name : 'suji',
  age : 30,
}

const jane = {
  name : 'jane',
}

console.log(isAdult(suji)); // true
console.log(isAdult(jane));  // true, undefined 이기 때문에 true로 반환되는 오류발생 

function isAdult1(user) {
  if(!('age' in user) || user.agr < 20) { // in 연산자를 사용해 age 값이 없으면 성인 아니라고 표시
    return false;
  } 
  return true;
}

console.log(isAdult1(suji)); // true
console.log(isAdult1(jane));  // false