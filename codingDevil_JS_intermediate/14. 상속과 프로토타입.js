const bmw = {
  color: 'red',
  wheels : 4,
  navigation : 1,
  drive() {
    console.log("drive..");
  },
};

const benz = {
  color: 'black',
  wheels : 4,
  drive() {
    console.log("drive..");
  },
};

const audi = {
  color: 'blue',
  wheels : 4,
  drive() {
    console.log("drive..");
  },
};

// 각 변수의 wheels와 drive()는 동일, 차가 더 들어나면 새로운 변수로 더 만들어 지게 되는데 
// 저렇게 공통된 부분은 어떻게 처리할 수 있을까? => __proto__로 해결이 가능 

// 1. car라는 상위 객체를 한개 만듬
const car = {
  wheels : 4,
  drive() {
    console.log("drive...");
  }
}

const bmw1 = {
  color: 'red',
  navigation : 1,
};

const benz1 = {
  color: 'black',
};

const audi1 = {
  color: 'blue',
};

// car의 상속을 받음 
bmw1.__proto__ = car;
benz1.__proto__ = car;
audi1.__proto__ = car;

console.log(bmw1); // { color: 'red', navigation: 1 }
console.log(bmw1.color); // red
// bmw1 내부에서 wheels property를 찾음. 없으면 __proto__에서 찾음
console.log(bmw1.wheels); // 4
console.log(bmw1.drive()); // drive...
console.log(benz1); // { color: 'black' }
console.log(audi1); // { color: 'blue' }

