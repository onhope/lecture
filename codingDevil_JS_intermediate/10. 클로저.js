function makeCOunter() {
  let num = 0; // 은닉화

  return function () {
    return num++;
  }
}

let counter = makeCOunter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2