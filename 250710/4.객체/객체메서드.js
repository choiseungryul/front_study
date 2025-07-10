// 객체(Object)에는 함수(메서드)도 넣을 수 있음

let user = {
  name: '홍길동',
  age: 20
}
user.hello = () => {
  console.log('hello');
}
user.hello();

function hello2() {
  console.log('hello2');
}
user.hello2 = hello2;
user.hello2();

let user2 = {
  name: "김자바",
  age : 20,
  hello : function() {
    console.log(this.name);
  }
}
let member = user2;
member.hello();
user2 = null;
member.hello();

user = {name : '홍길동'}
user2 = {name : '김자바'}

function show() {
  console.log(this.name);
}

user.f = show;
user2.f = show;

user.f();
user2.f();

// 객체 참조
let a = {
  name : '홍길동'
};
let b = a;
a.name = "김자바";
console.log(b.name);

// 배열
let arr = [1,2,3,4];

arr[0] = 20;
arr[1] = "a";

arr.push("zzzz"); // 배열방 추가 : .push
console.log(arr);

arr.pop(); // 배열방 삭제 : .pop (마지막방 삭제)
console.log(arr);