const user = {
  name : 'Mike',
}

console.log(user.name); // Mike

// 객체에는 자신이 프로퍼티를 가지고 있는지 확인하는 메소드가 있음 
console.log(user.hasOwnProperty('name')); // ture
console.log(user.hasOwnProperty('age')); // fasle

console.log(user); // 객체 안에 property가 없으면 __proto__안에서 찾음

// 만약 hasOwnProperty가 객체 안에 있으면?
const user1 = {
  name : "Tom",
  hasOwnProperty : function() {
    console.log('haha')
  }
}

// 객체에 property가 있으면 탐색을 멈춤
// 없을 때만 __proto__에서 property를 찾음
user1.hasOwnProperty(); // haha