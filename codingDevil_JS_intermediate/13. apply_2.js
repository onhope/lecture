// 1. Math 함수에 인수로 숫자를 차례로 넣기
const miniMum = Math.min(3, 10, 1, 6, 4);
const maxiMum = Math.max(3, 10, 1, 6, 4);

console.log(miniMum); // 1
console.log(maxiMum);  // 10

// 2. 배열을 넣기 => NaN
const miniMum2 = Math.min([3, 10, 1, 6, 4]);
const maxiMum2 = Math.max([3, 10, 1, 6, 4]);

console.log(miniMum2); // NaN
console.log(maxiMum2); // NaN

// 3. 변수에 배열을 저장하고, 전개 구문을 Math 함수의 인수로 넣기
const nums = [3, 10, 1, 6, 4];
const miniMum3 = Math.min(...nums);
const maxiMum3 = Math.max(...nums);

console.log(miniMum3); // 1
console.log(maxiMum3);  // 10

// 4. apply 함수를 사용하기 
// 두번째 인수로 배열을 전달하면, .그 요소들을 차례대로 인수로 사용
// null은 this로 사용될 값인데, Math 함수는 this를 필요로 하지 않아서 아무값이나 임의로 넣은 것
const miniMum4 = Math.min.apply(null, nums); // Math.min.apply(null, [3, 10, 1, 6, 4]); 
const maxiMum4 = Math.max.apply(null, nums); // Math.max.apply(null, [3, 10, 1, 6, 4]);

console.log(miniMum4); // 1
console.log(maxiMum4);  // 10