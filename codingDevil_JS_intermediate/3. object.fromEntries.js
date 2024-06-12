// 키와 값으로 이뤄진 배열을 값으로 갖는 배열
const arr = [
  ['name', 'Mike'],
  ['age', 18],
]

// 객체로 반환 fromEntries()
const result = Object.fromEntries(arr);
console.log(result); // { name: 'Mike', age: 18 }