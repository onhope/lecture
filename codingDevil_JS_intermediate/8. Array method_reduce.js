// 배열의 모든 수 합치기
let arr = [1, 2, 3, 4, 5];

// for, for of, forEach

let result = 0;

arr.forEach(num => {
    result += num;
})

console.log(result); // 15

// reduce

const result1 = arr.reduce((prev, cur) => {
    return prev + cur;    
}, 0) // 초기값 0, 옵션으로 안쓰면 배열의 첫번째 요소가 들어감

console.log(result1);  // 15