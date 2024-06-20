let user = {
  name : "mike",
  age : 30,
};

let userList = ["mike", 'tom', 'jane'];

console.log(typeof user); // object
console.log(typeof userList); // object


console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true

