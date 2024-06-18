// 금칙어 : 콜라

// -1보다 큰지를 체크해주면 올바르게 나옴
function hasCola(str) {
  if(str.indexOf("콜라") > -1) {
    console.log("금칙어가 있습니다.");
  }else {
    console.log("통과");
  }
}

// hasCola("와 사이다가 짱이야"); // 금칙어가 있습니다. 콜라가 없으므로 if(-1) => true
// hasCola("무슨소리, 콜라가 최고"); // 금칙어가 있습니다. 
// hasCola("콜라"); // 통과. 0이므로 => false

hasCola("와 사이다가 짱이야"); // 통과
hasCola("무슨소리, 콜라가 최고"); // 금칙어가 있습니다. 
hasCola("콜라"); // 금칙어가 있습니다.

