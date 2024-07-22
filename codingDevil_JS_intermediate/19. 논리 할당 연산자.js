function add(num1, num2) {
  // NaN을 피하기 위해서 기본값 설정
  // num1 = num1 || 0;
  // num2 = num2 || 0;

  // 위의 표현은 축약해서 적을 수 있음
  num1 ||= 0;
  num2 ||= 0; 

  console.log(num1 + num2);
}

console.log(add()); // 기본값을 주지 않으면 NaN, 기본값 설정시 0


let num = 0;
let a = num || 3;
console.log(a); // 3, 0은 false이기 때문에 뒤의 3이 반환

let b = num ?? 3;
console.log(b); // 0, null이나 undefined가 아니기 때문에 0
