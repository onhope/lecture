console.log(10 > 5); // true
console.log(10 == 5); // false, 동등연산자 ==
console.log(10 != 5); // true

// 동등연산자가 이상하게 동작할 때
const a = 1;
const b = "1";
console.log(a == b); // true, 숫자형과 문자형인데 같다고 나옴, 이상하죠
console.log(a === b); // false, === 타입까지 비교 가능, 일치연산자

// 동등연산자 보다 일치연산자를 사용하는게 좋음, 버그의 위험성을 줄이기 위해

// if, else, else if
let age = 10;

if(age > 19) {
  console.log('환영'); // 실행
}

if(age <= 19) {
  console.log('안녕');
}

console.log('---------------------');

// else 이용해서 코드 발전
// else는 if문이 false일때 실행
if(age > 19) {
  console.log('환영'); // 실행
} else {
  console.log('안녕');
}

console.log('---------------------');

// 추가요구사항 : 19살이면 수능잘치세요 라는 문구를 보여주세요
age = 19;

if(age > 19) {
  console.log('환영'); 
} else if(age === 19) {
  console.log("수능잘치세요"); // 실행
} else {
  console.log('안녕');
}

console.log('---------------------');