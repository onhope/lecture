let age = 30;

function showAge() {
    console.log(age); // TDZ
    let age = 20; // 호이스팅 되지 않음 
}

showAge(); // 에러 발생 