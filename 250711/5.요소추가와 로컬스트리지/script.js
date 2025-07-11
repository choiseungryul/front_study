const FRUITS = [
  { name: 'apple', memo : '빨갛고 맛있는 사과'},
  { name: 'mango', memo : '달달하고 맛있음'},
  { name: 'melon', memo : '그냥 맛있음'}
];

for(let i=0; i<FRUITS.length; i++) {
  let card = `
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./요소추가연습이미지/${FRUITS[i].name}.jpg" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${FRUITS[i].name}</h5>
              <p class="card-text">${FRUITS[i].memo}</p>
              <button class="btn btn-primary cart">담기</button>
        </div>
      </div>
   `;
   // beforebegin : 해당 요소 앞에 HTML 넣어줌
   // afterbegin : 해당 요소 첫번째 자식으로 HTML 추가
   // beforeend : 해당 요소 마지막 자식으로 HTML 추가
   // afterend : 해당 요소 뒤에 HTML 추가
   document.querySelector('.row').insertAdjacentHTML('beforeend', card);
}
const cart = document.querySelectorAll('.cart');
for(let i=0; i<cart.length; i++) {
  cart[i].addEventListener('click', (e) => {
    let nameTag = e.target.previousElementSibling.previousElementSibling;
    let name = nameTag.innerHTML;
    
    let temp = localStorage.getItem('cart');
    if(temp != null) {
      // 로컬스트리지에 있으면 그 정보들을 꺼내와야 함
      temp = JSON.parse(temp);
      // 새로 장바구니에 담을 name을 추가
      temp = push(name);
      localStorage.setItem('cart', JSON.stringify(temp));
    } else {
      localStorage.setItem('cart', JSON.stringify([name]));
    }
  })
}

// 로컬스트리지에 저장 or 수정 ( 동일한 키를 넣으면 기존 데이터를 지움 )
localStorage.setItem('키', '값')
// 로컬스트리지에서 해당 키에 대한 값을 리턴해줌
localStorage.getItem('키')
// 로컬스트리지에서 해당 키를 삭제
localStorage.removeItem('키')


let arr = [1,2,3,4,5];
let obj = {
  name : 'kim',
  age : 20
};
// 로컬스트리지에는 배열, 오브젝트를 넣어봐야 문자열 형태로 처리됨
localStorage.setItem('arr', arr);
localStorage.setItem('obj', obj);

// JSON형식으로 변환 "[1,2,3,4]"
// arr인 배열을 문자열(JSON)로 변환
let arr_json = JSON.stringify(arr);
// console.log(arr_json, typeof arr_json);

// 배열은 아니지만 배열 구조 ( 대괄호 )가 유지된채로 문자열이 됨
localStorage.setItem('arr', arr_json);

arr = localStorage.getItem('arr');
// 로컬스트리지에서 꺼재와도 아직까진 문자열임 ( 구조가 살아있는 상태 )
console.log(arr, typeof arr);

arr = JSON.parse(arr);
console.log(arr, typeof arr);













/* 
const cardTitle = document.querySelectorAll('.card-body h5');
const cardMemo = document.querySelectorAll('.card-body p');
const cardImg = document.querySelectorAll('img');

for(let i=0; i<FRUITS.length; i++) {
  cardTitle[i].innerHTML = FRUITS[i].name;
  cardMemo[i].innerHTML = FRUITS[i].memo;
  cardImg[i].setAttribute('src', './요소추가연습이미지/${FRUITS[i].name}.jpg');
} */





/* document.querySelectorAll('.card-body h5')[0].innerHTML = FRUITS[0].name;
document.querySelectorAll('.card-body p')[0].innerHTML = FRUITS[0].memo;
document.querySelectorAll('img')[0].setAttribute('src', `./요소추가연습이미지/${FRUITS[0].name}.jpg`);

document.querySelectorAll('.card-body h5')[1].innerHTML = FRUITS[1].name;
document.querySelectorAll('.card-body p')[1].innerHTML = FRUITS[1].memo;
document.querySelectorAll('img')[1].setAttribute('src', `./요소추가연습이미지/${FRUITS[1].name}.jpg`);

document.querySelectorAll('.card-body h5')[2].innerHTML = FRUITS[2].name;
document.querySelectorAll('.card-body p')[2].innerHTML = FRUITS[2].memo;
document.querySelectorAll('img')[2].setAttribute('src', `./요소추가연습이미지/${FRUITS[2].name}.jpg`); */