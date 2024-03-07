import '../scss/style.scss';
import '../scss/buttons.scss';
import '../scss/fonts.scss';
import '../js/swiper.js';

/* button */

let servicesMain = document.querySelector('.services__main');
let servicesNavigation = servicesMain.querySelector('.services-navigation__list');
let buttonReadMore = servicesMain.querySelector('.button-readMore');

buttonReadMore.textContent = 'Показать всё';

buttonReadMore.addEventListener('click', function () {
  if (buttonReadMore.textContent === 'Показать всё') {
    servicesNavigation.classList.remove('navigation__list--hide');
    buttonReadMore.classList.add('button-close');
    buttonReadMore.textContent = 'Скрыть';
  }
  else {
    servicesNavigation.classList.add('navigation__list--hide');
    buttonReadMore.classList.remove('button-close');
    buttonReadMore.textContent = 'Показать всё';
  }
});

console.log('Works!');
