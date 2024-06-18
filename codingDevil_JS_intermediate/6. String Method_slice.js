let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

// 숫자들은 제외하고 글자들만 찍는 방법

let newList = [];
for (let index = 0; index < list.length; index++) { 
  newList.push(
    list[index].slice(4)
  );
}

console.log(newList);