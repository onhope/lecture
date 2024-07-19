const car = {
  wheels : 4,
  drive() {
    console.log("drive...");
  },
}

const bmw = {
  color: 'red',
  navigation : 1,
};

// car의 상속을 받음 
bmw.__proto__ = car;

// 상속은 계속 이어질 수 있음 
const x5 = {
  color : 'white',
  name : 'x5',
}

x5.__proto__ = bmw;

console.log(x5.name); // x5 
console.log(x5.color); // white
console.log(x5.wheels); // 4
console.log(x5.navigation); // 1

console.log('--------------------------');

for (p in x5) {
  console.log(p);
}

console.log("---------------------------");
console.log(x5); // { color: 'white', name: 'x5' }
console.log("---------------------------");
// 상속된 프로퍼티는 key와 value를 찍을 때 나오지 않음
console.log(Object.keys(x5)); // [ 'color', 'name' ]
console.log(Object.values(x5)); // [ 'white', 'x5' ]

console.log("--------------------------");
for (p in x5) {
  if(x5.hasOwnProperty(p)) {
    console.log("o", p); // o color , o name : hasOwnProperty는 객체가 직접 가지고 있는 propertytype만 true로 반환
  } else {
    console.log('x', p); // x navigation, x wheels, x drive
  }
}