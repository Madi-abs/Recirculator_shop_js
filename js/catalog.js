document.addEventListener('DOMContentLoaded', function () {

   // *** Фиксированное меню для страницы каталога ***
   const headerCatalog = document.querySelector('.header-catalog');

   window.addEventListener('scroll', e => {
      if(scrollY > 600) {
         headerCatalog.classList.add('scrolled')
      } else {
         headerCatalog.classList.remove('scrolled')
      }
   })


   // *** Валидация формы и модальное окно об успешной отправке заказа ***
   let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

   const phone = document.getElementById('phone');
   const errorMessage = document.querySelector('.error-message');
   const successMessage = document.querySelector('.success-message')
   const btn = document.getElementById('btn__cart');
   const form = document.querySelector('.cart-form');
   const cart = document.querySelector('.cart');
   const cartSuccess = document.querySelector('.cart-success');
   const closePopup = document.querySelector('.close-popup');
   const cartName = document.querySelector('.cart__name');

   form.addEventListener('submit', function(e) {
      e.preventDefault();

      const cartItems = this.querySelectorAll('.cart__item');

      if(!reg.test(phone.value)) {
        setError(phone);
      } else {
         setSuccess(phone);
         form.reset();

         cartItems.forEach(item => {
            item.remove();
         })
      }
   })



   function setError() {
      phone.classList.remove('success');
      phone.classList.add('error');
      errorMessage.innerHTML = 'Укажите верный номер телефона!';
      successMessage.innerHTML = '';
   }

   function setSuccess() {
      cartName.textContent = 'Корзина пуста';
      cartSuccess.style.display = 'block';

      cart.classList.remove('active');

      phone.classList.remove('error');
      errorMessage.innerHTML = '';
   }

   closePopup.addEventListener('click', function() {
      cartSuccess.style.display = 'none';
   })

   window.addEventListener('click', function(e) {
      if(e.target === cartSuccess ) {
         cartSuccess.style.display = 'none';
      }
   })

})

