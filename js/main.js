document.addEventListener('DOMContentLoaded', function () {

// *** Мобильное бургер-меню ***
   const burger = document.querySelector('.burger');
      const headerMenu = document.querySelector('.menu');

      if(burger) {
         burger.addEventListener('click', function(e) {
         burger.classList.toggle('burger--active');
         headerMenu.classList.toggle('menu--active');
      })
      }

   // *** Фиксированное меню после 1 экрана ***
   const header = document.querySelector('.header');

   window.addEventListener('scroll', e => {
      if(scrollY > 600) {
         header.classList.add('scrolled')
      } else {
         header.classList.remove('scrolled')
      }
   })

   // *** Плавный скролл до якоря с учетом фикс.меню ***
      document.querySelectorAll('a[href*="#"]').forEach(link => {

         link.addEventListener('click', function(e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            if(burger.classList.contains('burger--active')) {
               burger.classList.remove('burger--active');
               headerMenu.classList.remove('menu--active');
            }

            window.scrollBy({
                  top: offsetPosition,
                  behavior: 'smooth'
            });
         });
      });



   // *** Табы ***
   const tabsBtn = document.querySelectorAll('.tabs__btn');
   const tabsItems = document.querySelectorAll('.tabs__item');

   tabsBtn.forEach(function(btn) {

      btn.addEventListener('click', function() {

         let tabId = btn.getAttribute('data-tab');
         let currentTab = document.querySelector(tabId);

         if ( !btn.classList.contains('active') ) {
            tabsBtn.forEach(function(btn) {
            btn.classList.remove('active')
         });

         tabsItems.forEach(function(item) {
            item.classList.remove('active')
         });

         btn.classList.add('active');
         currentTab.classList.add('active');
         }
      })
   })
   // Делаем активным первый tab по-умолчанию
   document.querySelector('.tabs__btn').click();



   // *** Select ***
   // Полифил для метода forEach для NodeList
      if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
         thisArg = thisArg || window;
         for (var i = 0; i < this.length; i++) {
               callback.call(thisArg, this[i], i, this);
         }
      };
   }

   document.querySelectorAll('.select').forEach(selectWrapper => {

      const selectBtn = selectWrapper.querySelector('.select__btn');
      const selectList = selectWrapper.querySelector('.select__list');
      const selectItems = selectList.querySelectorAll('.select__item');
      const inputHidden = selectWrapper.querySelector('.select__input-hidden');

      selectBtn.addEventListener('click', function(e) {
         e.preventDefault();
         selectList.classList.toggle('visible');
      });

      selectItems.forEach((listItem) => {
         listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            selectBtn.innerHTML = this.innerHTML;
            inputHidden.value = this.dataset.value;
            selectList.classList.remove('visible')
         })
      });

      document.addEventListener('click', function(e) {
         if (e.target !== selectBtn) {
            selectList.classList.remove('visible');
         }
      });

      document.addEventListener('keydown', function(e) {
         if(e.key === 'Tab' || e.key === 'Escape') {
            selectList.classList.remove('visible');
         }
      })
   })
   


   // *** Range ***
   const sliderValue = document.querySelector('.value-number');
   const inputSlider = document.querySelector('.field-input');

   inputSlider.oninput = (() => {
      let value = inputSlider.value;
      sliderValue.textContent = value;
      sliderValue.style.left = (value/2) + '%';
      sliderValue.classList.add('show');
   });
   inputSlider.onblur = (() => {
      sliderValue.classList.remove('show');
   });


   // *** Валидация формы ***
   let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

   const phone = document.getElementById('phone');
   const errorMessage = document.querySelector('.error-message');
   const successMessage = document.querySelector('.success-message')
   const btn = document.getElementById('btn-quiz');
   const form = document.querySelector('.quiz-form');
   const allSelectQuiz = document.querySelectorAll('.select__item-quiz');
   const selectBtnQuiz = document.querySelector('.select__btn-quiz');

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
      phone.classList.remove('error');
      phone.classList.add('success');
      successMessage.innerHTML = 'Сообщение отправлено! Ожидайте звонка менеджера.';
      errorMessage.innerHTML = '';
      form.reset(); 
   }

 })