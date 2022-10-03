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
   const cartQuantity = document.querySelector('.cart__quantity');
   const cartSuccess = document.querySelector('.cart-success');
   const closePopup = document.querySelector('.close-popup');

   btn.addEventListener('click', e => {
      e.preventDefault();
      if(!reg.test(phone.value)) {
        setError(phone);
      } else {
         setSuccess(phone);
      }
   })

   function setError() {
      phone.classList.remove('success');
      phone.classList.add('error');
      errorMessage.innerHTML = 'Укажите верный номер телефона!';
      successMessage.innerHTML = '';
   }

   function setSuccess() {
      cartSuccess.style.display = 'block';

      cart.classList.remove('active');
      cartQuantity.textContent = 0;

      phone.classList.remove('error');
      phone.classList.add('success');
      errorMessage.innerHTML = '';
      form.reset(); 
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

