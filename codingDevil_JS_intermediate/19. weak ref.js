let user = {
  name : "mike",
  age : 30
}

const weakUser = new WeakRef(user);

user = null; // 참조를 끊어줌

const timer = setInterval(() => {
  const wUser = weakUser.deref(); // deref()는 참조에 접근하기 위해 사용
  if(wUser) {
    console.log(wUser.name);
  } else {
    console.log("제거되었습니다.");
    clearInterval(timer);
  }
}, 1000);
