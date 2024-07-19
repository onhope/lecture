// extends

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
  park() {
    console.log('PARK');
  }
}

const z4 = new Bmw('blue');
console.log(z4); // Bmw { color: 'blue', wheels: 4 }

console.log(z4.drive()); // drive...