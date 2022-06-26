 document.addEventListener('DOMContentLoaded', function () {

   // *** Корзина ***
   const productBtn = document.querySelectorAll('.product__btn');
   const cartContentList = document.querySelector('.cart__content-list');
   const cart = document.querySelector('.cart');
   const cartQuantity = document.querySelector('.cart__quantity');
   const fullprice = document.querySelector('.fullprice');
   // const productId = document.querySelectorAll('.')
   
   let price = 0;

   const randomId = () => {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   };

   const priceWithoutSpaces = (str) => {
      return str.replace(/\s/g, '');
   };

   const normalPrice = (str) => {
      return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
   };

   const plusFullPrice = (currentPrice) => {
      return price +=currentPrice;
   };

   const minusFullPrice = (currentPrice) => {
      return price -=currentPrice;
   };
   
   const printFullPrice = () => {
      fullprice.textContent = `${normalPrice(price)} ₽`
   };
   
   const printQuantity = () => {
      let productsListLength = cartContentList.querySelector('.simplebar-content').children.length;
      cartQuantity.textContent = productsListLength;
      productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
   };

   const deleteProduct = (productParent) => {

      // get id
      let id = productParent.querySelector('.cart__product').dataset.id;

      // disabled false
      document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;

      // minus price
      let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart__price').textContent));
      minusFullPrice(currentPrice);

      // print full price
      printFullPrice();

      // remove productParent
      productParent.remove();      

      // count and print quantity
      printQuantity();
   };

   const generateCart = (img, title, price, id) => {
      return   `
      <li class="cart__item">
         <article class="cart__product" data-id="${id}">
            <img class="cart__img" src="${img}" alt="">
            <div class="cart__text">
               <div class="cart__title">${title}</div>
               <div class="cart__price">${normalPrice(price)}</div>
            </div>
         </article>
         <button class="cart__delete" aria-label="Удалить товар"></button>
      </li>`;
   };

   productBtn.forEach(el => {

      // el.closest('.product__id').getAttribute('data-id');
      el.closest('.product').setAttribute('data-id', randomId());

      el.addEventListener('click', (e) => {
         let self = e.currentTarget;
         let parent = self.closest('.product');
         let id = parent.dataset.id;
         let img = parent.querySelector('.product__img').getAttribute('src');
         let title = parent.querySelector('.product__title').textContent;
         priceString = parent.querySelector('.product__price').textContent;
         let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product__price').textContent));

         // sum
         plusFullPrice(priceNumber);

         // print full price
         printFullPrice();

         // add to cart
         cartContentList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCart(img, title, priceString, id));

         // count and print quantity
         printQuantity();

         //disabled btn
         self.disabled = true;
      });
   });

   cartContentList.addEventListener('click', (e) => {
      if (e.target.classList.contains('cart__delete')) {
         deleteProduct(e.target.closest('.cart__item'));
      }
   })

 })
 
 