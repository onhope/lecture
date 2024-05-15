// 연산자 줄여서 쓰기
let num = 10;
let num1 = num += 5; // num = num + 5, 15
let num2 = num -= 5; // num = num - 5, 10
let num3 = num *= 5; // num = num * 5, 50
let num4 = num /= 5; // num = num / 5, 10
let num5 = num %= 5; // num = num % 5, 0

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

// 증가연산자와 감소연산자
let number = 10;
let result = number++; // 증가 시키기 전의 값을 result에 넣음

let number2 = 10;
let result2 = ++number2; // 증가시킨 값을 result에 넣음 

console.log(result); // 10
console.log(result2); // 12