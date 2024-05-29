// 객체 1
function makeObject(name, age) {
  return {
    name : name,
    age : age,
    hobby : 'football',
  }
}

const mike = makeObject('mike', 30);
console.log(mike); //age: 30, hobby : "football", name : "mike"

//  객체 2. 축약형 사용
function makeObject1(name, age) {
  return {
    name,
    age,
    hobby : 'football',
  }
}

const suji = makeObject1('suji', 30);
console.log(suji); //age: 30, hobby : "football", name : "suji"
