const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

function clearClassList() {
  for(let i=0; i<btns.length; i++) {
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }
};

  for(let i=0; i<btns.length; i++) {
  btns[i].addEventListener('click', () => {
    clearClassList();
    btns[i].classList.add('selected');
    contents[i].classList.add('show');
  })
};