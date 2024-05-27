// 로그인 하지 않아서 사용자의 이름을 모르는 경우
function sayHello(name) {
  console.log(name); // undefined
  let msg = `Hello`;
  if(name) {
    msg = `Hello, ${name}`
  }
  console.log(msg);
} 

sayHello();
sayHello('Mike');

// 위와 동일한 결과
function sayHello(name) {
  let msg = `Hello`;
  if(name) {
    msg += `, ${name}`
  }
  console.log(msg);
} 

sayHello();
sayHello('Mike');

