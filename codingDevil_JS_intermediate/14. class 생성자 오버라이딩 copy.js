// 오버라이딩
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log('drive...');
  }
  stop() {
    console.log('stop...');
  }
}

// car를 상속해서 bmx를 만들기

class Bmw extends Car {
  constructor(color) {
    super(color);
    this.navigation = 1;
  }
  park() {
    console.log('PARK');
  }
}

const z4 = new Bmw('blue');
console.log(z4); // Bmw { color: 'blue', wheels: 4, navigation: 1 }