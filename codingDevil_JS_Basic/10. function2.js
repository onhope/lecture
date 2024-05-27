// 매개변수 없는 함수
function showError() {
  // alert('에러가 발생했습니다. 다시 시도해주세요')
}

showError();

// 매개변수가 있는 함수
function sayHello(name) {
  const msg = `Hello, ${name}`
  console.log(msg);
} 

sayHello("Mike");
sayHello("Tom");
sayHello("Jane");