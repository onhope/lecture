// 생성자 함수를 이용하여, 비슷한 객체를 간단하게 만들기
const Bmw = function (color) {
  this.color = color;
};

// 코드를 더 깔끔하게 만들기
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function() {
//   console.log("drive...");
// }
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function() {
//   console.log("STOP!");
// }

// 그런데 이렇게 하면 constructor가 사라지면서 
// false가 나오는데, 이런 현상을 방지하기 위해서 prototype을 덮어쓰지 말고, property를 하나씩 추가하는 것이 좋은 것임
// 혹은 수동으로 constructor을 명시해 줘도 괜춘
// 이렇듯, js는 명확한 constructor를 보장하지 않음 , 개발자에 의해 언제든지 수정 가능 
Bmw.prototype = {
  constructor : Bmw,
  wheels : 4,
  drive() {
    console.log("drive...");
  },
  navigation : 1,
  stop() {
    console.log("STOP!");
  }
}

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(z4.constructor === Bmw); // constructor 수동 명시 안하면, false 하면 true

