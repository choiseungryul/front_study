const btnBoard = document.querySelector('#open');
const modalBox = document.querySelector('.black-bg');

 btnBoard.addEventListener('click', () => {
  modalBox.classList.add('show');
 });

//$('#open').on('click', () => {
//  $('.black-bg').addClass('show');
//  $('.black-bg').fadeIn();
//})

const btnClose = document.querySelector('#close');
btcClose.addEventListener('click', function() {
  modalBox.classList.remove('show');
});

//$('#close').on('click', () => {
//  $('.black-bg').removeClass('show');
//  $('.black-bg').fadeOut();
// })