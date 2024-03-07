import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);


/* swiper */

let servicesMain = document.querySelector('.services__main');
let servicesNavigation = servicesMain.querySelector('.services-navigation__list');
let servicesItem = servicesNavigation.querySelectorAll('.services-navigation__item');
let buttonReadMore = servicesMain.querySelector('.button-readMore');

const breakpoint = window.matchMedia('(max-width:700px)');

if (breakpoint.matches === true) {
  servicesNavigation.classList.add('services-navigation__list--mobile');
  servicesNavigation.classList.remove('navigation__list--hide');
  buttonReadMore.classList.add('element--hide');

  for (let i = 0; i < servicesItem.length; i++) {
    servicesItem[i].classList.add('services-navigation__item--width');
  }

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    noSwiping: false,
    slidesPerView: 'auto',
    spaceBetween: 35,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
