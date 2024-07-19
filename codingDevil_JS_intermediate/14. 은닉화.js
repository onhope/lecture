// color를 임의로 변경을 할 수 있음
const Bmw = function(color) {
  this.color = color;
}

const x5 = new Bmw('red');
console.log(x5.color); // red

x5.color = "black";
console.log(x5.color); // black

// 임의 변경이 안되도록 하기 위하여 클로저를 사용
// 초기의 세팅했던 color 값을 얻을 수만 있고, 변경은 불가
const audi = function(color) {
  const c = color;
  this.getColor = function() {
    console.log(c);
  }
}

const z4 = new audi("red"); 
console.log(z4.getColor()); // red
console.log(audi('blue')); // undefined
