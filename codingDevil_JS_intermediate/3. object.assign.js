const user = {
  name : 'Mike',
  age : 18,
}

const user2 = user; // 복제가 아니라 메모리 주소가 참조 된 것

console.log(user2); 

// user2의 name을 변경 시키면 user의 name도 같이 변경이 됨
user2.name = 'Tom';
console.log(user2.name); // Tom
console.log(user.name);  // Tom

// 그러므로 객체를 복제할 때는 Object.assign({}, 객체)
const user3 = Object.assign({}, user);
console.log(user3);

// 복제한 객체의 name을 변경해도 기존 user의 name은 변경 되지 않음
user3.name = 'Suji';
console.log(user.name); // Tom
console.log(user3.name); // Suji
