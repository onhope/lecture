// 객체 for...in 반복문
const Mike = {
  name : 'clark',
  age : 30,
}

for (x in Mike) {
  console.log(x); // name, age 키를 반환
  console.log(Mike[x]); // clark, 30 키를 이용해 값을 반환 
}

