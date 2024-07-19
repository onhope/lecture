function* fn() {
  const num1 = yield "첫번째 숫자를 입력해주세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력해주세요"
  console.log(num2);

  return num1 + num2;
}

const a = fn();

console.log(a.next()); // { value: '첫번째 숫자를 입력해주세요', done: false }
console.log(a.next(2)); // 2, { value: '두번째 숫자를 입력해주세요', done: false }
console.log(a.next(4)); // 4, { value: 6, done: true }