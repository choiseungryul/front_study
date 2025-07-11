// 함수 : 자바의 메서드와 동일함
function showMsg() {
  let msg = "하이";
  console.log(msg);
}
showMsg(); // 함수호출
// msg변수는 showMsg함수의 지역변수이므로 사용못함
// console.log(msg);

let name = "홍길동";
function showInfo() {
  let msg = `안녕하세요 ${name}님`;
  console.log(msg);
}
showInfo();

// 매개변수와 리턴
function sum(x, y) {
  console.log(x + y);
}
sum(10, 5);

function sum2(x, y) {
  return x+y;
}
let result = sum2(10, 5);
console.log(result);