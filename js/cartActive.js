// модальное окно корзины появляется только, если в нет есть товар
function cartActive() {

   const cart = document.querySelector('.cart');
   const cartContentList = document.querySelector('.cart__content-list');
   const cartName = document.querySelector('.cart__name');

   let productsListLength = cartContentList.querySelector('.simplebar-content').children.length;

   if (productsListLength > 0) {
      cart.classList.add('active');
      cartName.textContent = 'В корзину';
   } else {
      cart.classList.remove('active');
      cartName.textContent = 'Корзина пуста';
   }
}



