// 문자형 표시
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
const message3 = `my name is ${name1}`;
// 표현식을 넣을 수도 있음
const message4 = `나는 ${30+1}살 입니다`

console.log(name1);
console.log(name2);
console.log(name3);
console.log(message);
console.log(message2);
console.log(message3);
console.log(message4);

// 숫자형

