// const name = prompt("이름을 입력하세요.")
// alert("환영합니다. " + name + "님" );
// alert(`환영합니다 ${name} 님` );

// console.log(name); // 입력안하고 취소 클릭시 null (아무 내용도 없다는 의미)

// prompt는 기본값을 입력할 수 있음 
// 두 개의 인수를 받을 수 있음, 1은 메시지 2. 기본값
const name = prompt("예약일을 입력해 주세요.", "2020-10-");
console.log(name);

// confirm 확인받을 때 사용
// 확인과 취소 버튼이 있음. prompt와 다른점 

// const isAdult = confirm("당신은 성인 입니까?")
// console.log(isAdult);