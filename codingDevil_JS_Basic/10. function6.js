// OR
function sayHello(name) {
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello(); // Hello, friend
sayHello('Jane'); // Hello, Jane

// default value -> name이 없을 때만 할당
function sayHello(name = 'friend') {
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello(); // Hello, friend
sayHello('Jane'); // Hello, Jane
