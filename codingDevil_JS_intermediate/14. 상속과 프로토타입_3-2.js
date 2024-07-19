// 생성자 함수를 이용하여, 비슷한 객체를 간단하게 만들기
const Bmw = function (color) {
  this.color = color;
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

// 1. wheels와 drive()는 동일하므로 분리 가능
// 근데 매번 변수에 프로토타입을 부여해 주는건 번거로운 작업
// const car = {
//   wheels : 4,
//   drive() {
//     console.log("drive...");
//   }
// }

// x5.__proto__ = car;
// z4.__proto__ = car;

// 2. 이렇게 Bmw에 프로퍼티값을 만들어 주고 사용
// 생성자 함수가 생성하는 객체에 __proto__를 protorype으로 설정한다는 의미 
// 중복 코드를 줄일 수 있음. 한번만 작업을 해주면 생성자 함수로 만들어진 객체에 일일히 작업을 할 필요가 없음 
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function() {
  console.log("drive...");
}
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function() {
  console.log("STOP!");
}

console.log(x5.wheels); // 4
console.log(x5.drive()); // drive...
console.log(z4.wheels); // 4
console.log(z4.drive()); // drive...
console.log(x5.navigation); // 1
console.log(x5.stop()); // STOP!
