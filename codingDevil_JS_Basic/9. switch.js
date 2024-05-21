let fruit = prompt("무슨 과일을 사고 싶냐?");

switch(fruit) {
  case "사과" :
    console.log("100원 입니다.");
    break;
  case "바나나" :
    console.log("200원 입니다.");
    break;
  case "키위" :
    console.log("300원 입니다.");
    break;
  case "멜론" :
  case "수박" :
    console.log("500원 입니다.");
    break;
  // 만약 사용자가 여기 없는 값을 입력하는 경우 => 아무일도 없음, 사용자 입장에서모르니까 메시지 표시 (default)
  default :
    console.log("그런 과일은 없습니다.");
}

