let userList = [
    {name : "Mike", age: 30},
    {name : "Tom", age: 10},
    {name : "Jane", age: 27},
    {name : "Sue", age: 26},
    {name : "Harry", age: 42},
    {name : "Steve", age: 60},
]

let result = userList.reduce((prev, cur) => {
    if(cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result); // [ 'Mike', 'Jane', 'Sue', 'Harry', 'Steve' ]

// 나이의 합을 구하기 
let result1 = userList.reduce((prev, cur) => {
    return prev += cur.age;
}, 0);

console.log(result1); // 195

// 이름이 3자인 사람
let result2 = userList.reduce((prev, cur) => {
    if (cur.name.length === 3) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result2); // [ 'Tom', 'Sue' ]
