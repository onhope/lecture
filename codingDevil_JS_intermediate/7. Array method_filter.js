let arr = [1,2,3,4,5,6];

const result = arr.filter((item) => {
  return item % 2 === 0;  
})

console.log(result); // [ 2, 4, 6 ]

