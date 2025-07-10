const box = document.getElementById('box')
box.style.background = 'red';
console.log(box);
// document.getElementsByClassName

const box2 = document.querySelector('#box') // 선택자를 이용해서 요소 선택
box2.style.color = 'white'

// querySelector : 선택자에 해당하는 요소 중 첫번째꺼 하나만 적용
// const bg = document.querySelector('.bg');
// bg.style.background = 'pink';

// 선택자에 해당하는 모든 요소들을 가져옴
const bg = document.querySelectorAll('.bg');
console.log(bg);
// bg[0].style.background = 'pink';
// bg[1].style.background = 'pink';
//for(let i=0; i<bg.length; i++) {
//  bg[i].style.background = 'pink';
// }
// for ... in : object 반복할때
for(let b of bg) {
  b.style.background = 'pink'
}

const li = document.querySelectorAll('ul > li');
for(let l of li) {
  l.innerHTML = "HAHAHA";
}