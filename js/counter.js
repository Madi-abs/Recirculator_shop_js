// import {printQuantity} from './printQuantity';

window.addEventListener('click', function (e) {

   // *** Счетчик ***
   let counter;

   if (e.target.dataset.action === "plus" || e.target.dataset.action === "minus") {
      const productCounter = e.target.closest('.product__counter');
      counter = productCounter.querySelector('[data-counter]');
   }

   if (e.target.dataset.action === "plus") {
      counter.textContent = ++counter.textContent;
      calcFullPrice();
   } 

   if (e.target.dataset.action === "minus") {

      // кол-во товара в карточке товара нельзя сделать меньше 1
      if (parseInt(counter.textContent) > 1) {
         counter.textContent = --counter.textContent;
         calcFullPrice();
      } else if (e.target.closest('.cart__content-list') && parseInt(counter.textContent) === 1) {

         // если товар находится в корзине, то его можно удалить из корзины
         e.target.closest('.cart__item').remove();
         printQuantity();

         calcFullPrice();
      }
   }

   if (e.target.hasAttribute('[data-action]') && e.target.closest('.cart__content-list')) {
         calcFullPrice();
      }

});



 











