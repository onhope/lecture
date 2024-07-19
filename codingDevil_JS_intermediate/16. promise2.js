// promise를 사용하지 않고 만들어 보기 
// 뎁스가 깊어지면서 계속 콜백을 호출하는 것을 콜백 헬, 콜백 지옥이라고 부름 

const f1 = (callback) => {
  setTimeout(() => {
    console.log('1번 주문 완료');
    callback();
  }, 1000)
};

const f2 = (callback) => {
  setTimeout(() => {
    console.log('2번 주문 완료');
    callback();
  }, 3000)
};

const f3 = (callback) => {
  setTimeout(() => {
    console.log('3번 주문 완료');
    callback();
  }, 2000)
};


console.log('시작');
f1(function() {
  f2(function() {
    f3(function() {
      console.log("끝");
    })
  })
});