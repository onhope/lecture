// 다른 개발자가 만들어 놓은 객체
const user = {
  name : 'Sohee',
  age : 18,
};

// 내가 작업 
// 위의 객체에 아래의 메소드를 추가하면, 사용자가 이 메시지까지 보게 됨  
// user.showName = function() {}
// 그럼으로 위의 방식보다는 Symbol을 사용해서 객체 프로퍼티를 추가하는게 나음
// 이 경우 사용자의 메세지, 즉 for문에서는 해당 프로퍼티가 보이지 않음
const showName = Symbol('show name');
user[showName] = function() {
  console.log(this.name);
}

user[showName](); // sohee

// 사용자가 접속하면 보는 메시지
for(let key in user) {
  console.log(`her ${key} is ${user[key]}.`);
}