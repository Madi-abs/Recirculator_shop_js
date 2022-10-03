// *** Пересчет стоимость в корзине ***
function calcFullPrice() {

   const productItems = document.querySelectorAll('.cart__item');
   const fullprice = document.querySelector('.fullprice');

   let totalPrice = 0;

   productItems.forEach(function (item) {

      const amountEl = item.querySelector('[data-counter]');
      const priceEl = item.querySelector('.cart__price');

      currentPrice = parseInt(amountEl.textContent) * parseInt(priceEl.textContent);

      totalPrice = totalPrice + currentPrice;
   })

   // Отображаем цену на странице
   fullprice.textContent = totalPrice;
}



