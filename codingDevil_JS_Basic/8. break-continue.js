// break : 멈추고 빠져나옴
// continue : 멈추고 다음 반복으로 진행

// break
// while(true) {
//   let answer = confirm("계속 할까요?");
//   if(!answer) {
//     break;
//   }
// }

// continue -> 짝수만
for(let i=0; i < 10; i++) {
  // i를 2로 나눴을 때 나머지가 1이면 if문 통과
  // 아니면 console.log(i)
  if(i%2) {
    // 나머지가 1인경우(true인 경우는 1)
    continue;
  }
  // 나머지가 0인 경우, 즉 짝수(false는 0)
  console.log(i);
}