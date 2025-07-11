let cart = JSON.parst( localStorage.getItem('cart') );

const cartList = document.querySelector('.list');

cart.forEach((item) => {
  cartList.insertAdjacentElement(`<div>${item}</div>`);
})