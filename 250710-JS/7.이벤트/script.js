// const btn = document.querySelector('.btn');

// addEventListener 함수를 이용
// 이벤트 종류 : click, dbClick
// 이벤트 핸들러 : 이벤트 발생 시 실행코드. "함수"
// btn.addEventListener('click', function() {
//   alert('hahaha');
// } )
// 이벤트 삭제 : 종류, 핸들러 동일하게 적어줘야 함
// btn.removeEventListener('click', function() {
//   alert('hahaha');
// } ) // 위에 걸어둔 이벤트가 안지워짐.
// function handler() {
  //   alert("지워짐");
  // }
  // btn.addEventListener('click', handler);
  // btn.removeEventListener('click', handler);
  
  // const btn2 = document.querySelector('.btn2');
  // 이벤트 객체 : 이벤트가 발생할 때 생기는 모든 정보를 가지고 있음
  // btn2.addEventListener('click', function(e) {
    //   console.log(e.type);
    //   console.log(e.clientX);
    //   console.log(e.target);
    // });
    
    const btn = document.querySelector('.btn-mode');
    const body = document.body;
    let isDark = false;
    btn.addEventListener('click', (e) => {
      // 다크모드이면 true, 아니면 false
      if(isDark) {
        body.style.background = 'white';
        body.style.color = 'black';
        btn.value = '다크모드';
        isDark = !isDark;
      } else {
        document.body.style.background = 'black';
        document.body.style.color = 'white';
        btn.value = '라이트모드';
        isDark = !isDark;
      }
    })