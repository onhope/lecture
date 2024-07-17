// 전달 받은 모든 수를 더하기

function add(...numbers) {
  // 1.
  // let result = 0;
  // numbers.forEach((num) => (result += num));
  // console.log(result);

  // 2.
  let result = numbers.reduce((prev, cur) => prev + cur)
  console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);