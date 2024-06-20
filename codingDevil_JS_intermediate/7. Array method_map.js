let userList = [
  {name : "mike", age : 30},
  {name : "jane", age : 27},
  {name : "tom", age : 10},
];

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id : index + 1,
    isAdult : user.age > 19,
  });
});

console.log(newUserList);
// [
//  { name: 'mike', age: 30, id: 1, isAdult: true },
//  { name: 'jane', age: 27, id: 2, isAdult: true },
//   { name: 'tom', age: 10, id: 3, isAdult: false }
// ]

console.log(userList);
// [
//   { name: 'mike', age: 30 },
//   { name: 'jane', age: 27 },
//   { name: 'tom', age: 10 }
// ]