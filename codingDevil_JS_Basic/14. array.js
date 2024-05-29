// array
let days = ['mon', 'tue', 'wed'];

// index를 활용한 값 확인
console.log(days[1]); // tue

// index를 이용한 값 수정

days[1] = '화요일';

console.log(days); // ['mon', '화요일', 'wed']

// 배열의 길이 확인 
console.log(days.length); // 3

// 배열 제일 끝에 목요일 추가
days.push('목요일');
console.log(days); // ['mon', '화요일', 'wed', '목요일']

// 배열 제일 앞에 일요일 추가
days.unshift('sun');
console.log(days); // ['sun', 'mon', '화요일', 'wed', '목요일']

// for 문을 통한 반복 
for(let index=0; index < days.length; index++) {
  console.log(days[index]); // sun, mon, 화요일, wed, 목요일
}

// for..of를 이용한 반복
for(let day of days) { // 여기서 day는 배열의 요소로 아무 이름을 써도 됨
  console.log(day); // sun, mon, 화요일, wed, 목요일
}