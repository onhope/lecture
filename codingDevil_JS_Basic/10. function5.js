// 전역변수와 지역변수 (1)
// 한번 let으로 선언된 변수는 다시 let을 이용해서 변수 선언 불가
// 근데 전역변수와 지역변수로 구분되어 있는 경우는?
let message = 'welcome';
console.log(message); // welcome
function sayHello(name) {
  let message = 'Hello';
  console.log(message + ' ' + name); 
}

sayHello('Mike'); // hello mike
console.log(message); // welcome

// 전역변수와 지역변수 (2)
let name = "Mike";
function sayHello(name) {
  console.log(name);
}

sayHello(); // undefined
sayHello('jane') // jane

// 매개변수로 받은 값은 복사된 후  함수의 지역변수가 됩니다. 
// 전체 서비스에서 공통으로 바라봐야하는 변수를 제외하고는 지역변수를 쓰는 습관을 들이는 게 좋음
// 전역변수 많아지면 관리가 힘듬
