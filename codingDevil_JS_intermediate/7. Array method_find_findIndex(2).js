let userList = [
  {name : "mike", age : 30},
  {name : "jane", age : 27},
  {name : "tom", age : 10},
];

const result = userList.find((user) => {
  if(user.age < 19) {
    return true;
  }
  return false;
})

console.log(result); // { name: 'tom', age: 10 }

const result2 = userList.findIndex((user) => {
  if(user.age < 19) {
    return true;
  }
  return false;
})

console.log(result2); // 2