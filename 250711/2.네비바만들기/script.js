const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');

btn.addEventListener('click', () => {
  list.classList.toggle('show'); // toggle : 탈부착 동작
  // jquery : $('.list-group').toggleClass('show');
});

const liTags = document.querySelectorAll('.list-group-item');

for(let i=0; i<liTags.length; i++) [
  liTags[i].addEventListener('click', () => {
    alert('haha'); 
  })
]