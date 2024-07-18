const user = {
  name : "Mike",
  showName : function () {
    console.log(`Hello, ${this.name}`);
  },
}

user.showName(); // Hello, Mike

// fn에 할당할 때 this를 잃어버림
let fn = user.showName;

fn(); // Hello, undefined
fn.call(user); // Hello, Mike
fn.apply(user); // Hello, Mike

let boundFn = fn.bind(user);
boundFn(); // Hello, Mike