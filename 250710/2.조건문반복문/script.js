// 조건문 ( if문 )
let age = 20;
if(age >= 20) {
  console.log("성인");
} else if(age >= 12) {
  console.log("청소년");
} else {
  console.log("어린이");
}

// 삼항연산자 ( 조건식 ? 참 : 거짓 )
let result = age >= 20 ? "성인" : "청소년";

// 조건문 ( switch문 )
let a = 3;
switch(a) {
  case 1:
    console.log("a는 1이다");
    break;
  case 2:
    console.log("a는 2이다");
    break;
  default:
    console.log("a는 1,2가 아니다")
}

// 반복문 ( for문 )
let sum=0;
let total=0;
for(let i=1; i<=10; i++) {
  sum=sum+i;
  total=total+sum;
}
  console.log(total);

// 반복문 ( while문 )
// 반복종료(break;), 반복문 상단으로 돌아감(continue;)

