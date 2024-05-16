// or
// 이름이 tom이거나, 성인이면 통과

let name = 'mike';
let age = 30;

if(name === "tom" || age > 19) {
  console.log("통과");
}

// and
// 이름이 mike이고, 성인이면 통과

name = 'tom';
age = 30;

if(name === "mike" && age > 19) {
  console.log("통과");
} else {
  console.log("집에나 가");
}

// not
// 나이를 입력받아서 성인이 아니면 돌아가
// const old = prompt("몇살이냐?");
// const isAdult = old > 19;
// if(!isAdult) {
//   console.log("당신은 집으로 가세요");
// } else {
//   console.log("통과");
// }

// 논리연산자의 우선순위 && and > || or
// 남자이고, 이름이 Mike이거나 성인이면 통과 
const gender = "M";
name= "Jane";
const isAdult = true;
// and가 or보다 우선순위가 높아서 gender와 name이 먼저 평가되서 false || isAdult(true) 니까 true 로 "통과"
// if((gender === "M" && name === "Mike") || isAdult) { // 이 코드와 동일한 것
// if(gender === "M" && name === "Mike" || isAdult) {

// 그러므로 의도한 바대로 만들어 주려면  
if(gender === "F" && (name === "Mike" || isAdult)) {
  console.log("통과");
} else {
  console.log("고어웨이");
}