// 문자형 표시 방식
// 1. 큰따옴표"""
const name1 = "mike";
// 2. 작은 따옴표''
const name2 = "mike";
// 1, 2 둘 차이 없으나, 큰 따옴표로 감싸주는 경우 안쪽은 작은 따옴표 쓰기
const message = "I 'm a boy";
// 작은 따옴표만 사용하고 싶으면 작은 따옴표 앞에 \ 사용하면 특수 문자로 인식
const message2 = 'I \'m a boy';
// 3. 백틱 ``
// 문자열 내부에 변수를 넣어 줄 때 사용
const name3 = `mike`;
const message3 = `my name is ${name3}`;
// 표현식을 넣을 수도 있음
const message4 = `나는 ${30+1}살 입니다`

console.log(name1);
console.log(name2);
console.log(name3);
console.log(message);
console.log(message2);
console.log(message3);
console.log(message4);

// 숫자형 => 사칙 연산이 가능
let age = 30;
const PI = 3.14;

console.log(age);
console.log(PI);
console.log(1 + 2);
console.log(10 - 3);
console.log(3 * 2);
console.log(6 / 3);
console.log(6 / 4);
console.log(6 % 4);

// 숫자를 0으로 나눈 경우
const x = 1 / 0;
console.log(x); // infinity

// 숫자를 문자열로 나눈 경우
let name = "mike";
const y = name / 2;
console.log(y); // NaN ( = Not a number)

// boolean 논리적인 요소를 나타냄 -> 추후 논리연산자를 공부
const a = true; // 참
const b = false // 거짓

name = "tom";
age = 30;
console.log(name == "tom"); // true
console.log(age > 40); // false

// null : 존재하지 않는 값
let user = null; // user는 존재하지 않음
// undefinded : 선언만 하고 값이 할당되지 않음
let fruit;
console.log(fruit); // undefined

// typeof 연산자 : 변수의 자료형을 알아낼 수 있음 
// 다른 개발자가 사용한 변수의 타입을 알아야 하거나, API 통신을 통해 받아온 데이터를 타입에 따라 다른 방식으로 처리를 해야할 때 많이 사용

console.log(typeof 3); // number
console.log(typeof name);  // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
console.log(typeof null); // object : 객체형
console.log(typeof undefined);  // undefined

// null은 객체가 아님 (초기 자바스크립트 버전의 오류로 하위 호환성을 유지하기 위해 수정은 안한다고 함)

// 주의 사항 
// 1. 백틱을 사용한 경우, 실수로 일반 따음표를 사용시 변수가 노출
const name5 = `mike`;
const message5 = "my name is ${name4}";

console.log(message5);

// 2. 문자열을 + 사용하면 하나의 문자로 합쳐짐
let nickname = 'hana';
const ab = "나는 ";
const cd = " 입니다.";

console.log(ab + nickname + cd); // 나는 hana 입니다. 

// 3. 숫자형 + 문자형 = 문자형으로 변경
const old = 30; 
console.log(old);  // number
console.log(ab + old + "살" + cd); // 나는 30살 입니다
