// 생성자 함수를 이용하여, 비슷한 객체를 간단하게 만들기
const Bmw = function (color) {
  this.color = color;
  // this.wheels = 4;
  // this.drive = function () {
  //   console.log("drive...");
  // }
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(x5); // Bmw { color: 'red', wheels: 4, drive: [Function (anonymous)] }
console.log(z4); // Bmw { color: 'blue', wheels: 4, drive: [Function (anonymous)] }

// wheels와 drive()는 동일하므로 분리 가능
const car = {
  wheels : 4,
  drive() {
    console.log("drive...");
  }
}

x5.__proto__ = car;
z4.__proto__ = car;

console.log(x5.wheels); // 4
console.log(x5.drive()); // drive...
console.log(z4.wheels); // 4
console.log(z4.drive()); // drive...

