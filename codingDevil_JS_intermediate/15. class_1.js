// 생성자함수를 사용한 객체생성

const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function() {
    console.log(this.name);
  }
}

const mike = new User('mike', 20);
console.log(mike);// User { name: 'mike', age: 20, showName: [Function (anonymous)] }

// 클래스함수를 사용한 객체 생성
class User2 {
  constructor (name, age) {
    this.name = name; // 객체를 초기화 하기 위한 값이 정의 
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19);
console.log(tom);// User2 { name: 'Tom', age: 19 }

// showName 사용법은 동일 
console.log(mike.showName());// mike
console.log(tom.showName()); // tom
