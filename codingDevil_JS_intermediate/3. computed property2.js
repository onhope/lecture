//  객체를 만드는 함수
// 어떤게 키가 될지 모르는 객체를 만들 때 유용
function makeObj(key, val) {
  return {
    [key] : val,
  }
}

const obj1 = makeObj("나이", 34);
const obj2 = makeObj("gender", 'male');
console.log(obj1);
console.log(obj2);