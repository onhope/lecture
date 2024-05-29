// method
// let boy = {
//   name : "Mike",
//   showName : function() {
//     console.log(boy.name);
//   }
// }

// null이 안 나오도록 하기 위해서 this를 활용
// 메소드에서는 객체명을 직접 쓰기보다는 this를 쓰는것이 좋음
let boy = {
  name : "Mike",
  showName : function() {
    console.log(this.name);
  }
}

boy.showName(); // Mike

// 객체를 하나 더만든것이 아니고, 객체를 boy로도 접근할 수 있고 man으로도 접근할 수 있는것
// 즉 사람은 하나인데, 별명은 2개인 경우
let man = boy;

man.showName(); // Mike

boy = null;
man.showName(); // null

man.showName(); // Mike

// 메소드를 화살표함수로 작성한 경우
// 객체 메소드를 작성할 때는 화살표 함수로 작성하지 않는 것이 좋음
let boy1 = {
  name : "Mike",
  sayThis : () => {
    console.log(this);
  }
}

boy1.sayThis(); // this는 전역객체인 window를 반환
