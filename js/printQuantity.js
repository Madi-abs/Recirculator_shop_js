// модальное окно корзины появляется только, если в нет есть товар, и выводит кол-во товаров
function printQuantity () {

   const cart = document.querySelector('.cart');
   const cartQuantity = document.querySelector('.cart__quantity');
   const cartContentList = document.querySelector('.cart__content-list');

   let productsListLength = cartContentList.querySelector('.simplebar-content').children.length;

   cartQuantity.textContent = productsListLength;

   productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');

}



