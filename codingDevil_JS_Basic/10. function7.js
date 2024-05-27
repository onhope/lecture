// return으로 값 반환 (1)
function add(num1, num2) {
  return num1 + num2;
} 

const result = add(2, 4);
console.log(result); // 6

// return으로 값 반환 (2)
function showError() {
  alert('에러가 발생했습니다.');
}

const result2 = showError();
console.log(result2); // undefined, return문이 없는 함수도 undefined를 반환

// (3)
function showError() {
  alert('에러가 발생했습니다.');
  return;
}

const result3 = showError();
console.log(result3); // return문만 있어도 undefined

// 참고로 return만 있으면, return 오른쪽의 값만 반환하고 종료
// 함수를 종료하는 목적으로 사용하기도 함
function showError() {
  alert('에러가 발생했습니다.');
  return;
  alert("이코드는 절대 실행되지 않습니다.")
}

const result4 = showError();
console.log(result4); 