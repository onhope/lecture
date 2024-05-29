// 객체
const superman = {
  name : 'clark',
  age : 30,
}

//  객체에 접근
console.log(superman.name); // clark 
console.log(superman['age']);  // 30

console.log(superman); //   name : 'clark', age : 30,

// 객체에 추가
superman.hair = 'black';
superman['hobby'] = 'soccer';
console.log(superman); // age : 30, hair: "black", hobby : "soccer", name : "clark"

// 객체 프로퍼티 지우기 
delete superman.age;
console.log(superman); // hair: "black", hobby : "soccer", name : "clark"

