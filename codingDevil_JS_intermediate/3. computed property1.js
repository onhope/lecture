let n = 'name';
let a = 'age';

const user = {
  [n] : 'Mike',
  [a] : 30,
  [1 + 4] : 5, // 숫자도 가능
}

console.log(user);