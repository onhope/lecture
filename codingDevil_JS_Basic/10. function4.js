// 함수 내에서 선언된 변수(지역변수)는 함수 밖에서 사용 불가
// 에러 발생
console.log(msg); 

// 함수 밖에서도 사용하고 싶다면 함수 밖으로 빼 줘야 함
// 전역변수
let msg = 'Hello';
console.log('함수 호출전');
console.log(msg); // Hello

function sayHello(name) {
  if(name) {
    msg += `, ${name}`
  }
  console.log("함수내부");
  console.log(msg); // Hello, Mike
} 

sayHello('Mike');
console.log('함수호출후');
console.log(msg); // Hello, Mike

