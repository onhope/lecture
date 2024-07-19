function* fn() {
  yield 4;
  yield 5;
  yield 6;
}

const a = fn();
// 자기자신에 Symbol.iterator를 실행시킨 것이 자기자신
// 즉 Generator는 iterable 객체인 것
// 그렇다면 for of 사용 가능 
console.log(a[Symbol.iterator]() === a); // true


// for of가 실행되면 Symbol.iterator를 호출하고, 만약에 없으면 에러가 발생
// 반환된 iterator에 next메서드를 호출하면서 done이 true가 될때까지 반복
for (let num of a) {
  console.log(num); // 4 5 6
}