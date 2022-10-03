document.addEventListener('DOMContentLoaded', function () {

   const cartContentList = document.querySelector('.cart__content-list');

   window.addEventListener('click', function (e) {
      
      // *** Добавление товара в корзину ***
      if (e.target.hasAttribute('data-cart')) {
         const productItem = e.target.closest('.product');

         const productInfo = {
            id: productItem.dataset.id,
            img: productItem.querySelector('.product__img').getAttribute('src'),
            title: productItem.querySelector('.product__title').textContent,
            price: productItem.querySelector('.product__price').textContent,
            counter: productItem.querySelector('[data-counter]').textContent         
         }

         // проверяем, если ли товар в корзине с таким id, если есть, то складываем их, если нет - добавляем новый товар
         const itemInCart = cartContentList.querySelector(`[data-id="${productInfo.id}"]`);

         if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.textContent = parseInt(counterElement.textContent) + parseInt(productInfo.counter);
         } else {

            const generateCart = `
               <li class="cart__item">
                  <article class="cart__product" data-id="${productInfo.id}">
                     <img class="cart__img" src="${productInfo.img}" alt="">
                     <div class="cart__text">
                        <div class="cart__title">${productInfo.title}</div>
                        <div class="product__counter">
                           <div class="counter__control" data-action="minus">-</div>
                           <div class="counter__current" data-counter>${productInfo.counter}</div>
                           <div class="counter__control" data-action="plus">+</div>
                        </div>
                        <div className="price">
                           <span class="cart__price">${productInfo.price}</span>
                           <span class="currency">руб/шт</span>
                        </div>
                     </div>
                  </article>
               </li>`

            cartContentList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCart);
            cartActive();
         }

         // сбрасываем счетчик в карточке товара после добавления товара в корзину
         productItem.querySelector('[data-counter]').textContent = '1';

         // пересчитываем корзину
         calcFullPrice();
      }
   });

   


   
 })









