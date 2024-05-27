// showError();

// 함수표현식 => 코드에 도달하면 생성
// 미리 함수 호출하면 에러 발생 
// let showError = function () {
//   console.log('error'); // 에러발생
// }

// 함수 선언문
// 호이스팅으로 에러 발생 안함
// function showError() {
//   console.log('error'); // error
// }

// 화살표함수로 변경
// let showError = () => {
//   console.log('error');
// }

// showError(); // error

// (2) 함수표현식
// const sayHello = function (name) {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// }

// (2) 위의 함수 표현식을 화살표 함수로 변경
// const sayHello = (name) => {
//   const msg = `Hello, ${name}`;
//   console.log(msg); // hello, undefined
// }

// sayHello();

// (3) 함수 표현식
// const add = function (num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// (3) 화살표 함수로 변경
// const add = (num1, num2) => {
//   return num1 + num2;
// }

// (3) 간결하게 축약
// const add = (num1, num2) => (
//   num1 + num2
// )

// (4) 더 간결하게 축약 가능
const add = (num1, num2) => num1 + num2



