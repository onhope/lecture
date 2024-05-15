// const mathScore = prompt("수학 몇점?");
// const englishScore = prompt("영어 몇점?");
// const result = (mathScore + englishScore) / 2; // 괄호가 없으면 나누기가 먼저 계산이 되므로, 괄호로 먼저 더 해준다
// console.log(result); // 4540

const mathScore = 90;
const englishScore = 80;
const result = (mathScore + englishScore) / 2; // 괄호가 없으면 나누기가 먼저 계산이 되므로, 괄호로 먼저 더 해준다
console.log(result); // 85



// prompt 입력 받은 값  => 문자형 => "90"
// "90" + "80" = "9080" 
// "9080" / 2 = 4540 숫자형으로 자동 변환되어서 계산 (자동형변환)
// 원인을 찾을 수 없는 에러가 발생할 수 있음 => 명시적 형변환으로 해결

console.log(
  String(3), // "3"
  String(true), // "true"
  String(false), // "false"
  String(null), // "null"
  String(undefined) // "undefined"
);

// Number() 괄호안의 타입을 숫자로 변경, 사용자로부터 입력받은 값이 문자형인 경우 자주 사용됨
console.log(Number("1234")); // 1234
console.log(Number("1234asdfg")); // NaN, 주의) 숫자와 문자가 같이 있는 문자형의 경우 NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Boolean 
// false의 경우인 숫자 0, 빈 문자열 '', null, undefined, NaN를 제외하고 전부 true

// 주의 사항 (암기)
console.log(Number(null)); // 0
console.log(Number(undefined));  // NaN
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(''); // false
console.log(' '); // true