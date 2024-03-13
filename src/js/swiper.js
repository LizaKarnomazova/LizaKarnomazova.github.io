
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
Swiper.use([Pagination]);


/* swiper */

let NavigationContainers = document.querySelectorAll('.swiper-navigation__container');

NavigationContainers.forEach((navigationContainer) => {

  let NavigationList = navigationContainer.querySelector('.swiper-navigation__list');
  let NavigationItem = NavigationList.querySelectorAll('.swiper-navigation__item');
  let buttonReadMore = navigationContainer.querySelector('.button-readMore');

  let NavigationPrices = document.querySelector('.prices-navigation__container');

  const breakpoint = window.matchMedia('(max-width:760px)');

  if (breakpoint.matches === true) {

    for (let i = 0; i < NavigationItem.length; i++) {
      NavigationItem[i].classList.add('swiper-navigation__item--width');
    }

    NavigationList.classList.remove('navigation__list--hide');
    NavigationList.classList.add('swiper-navigation__list--mobile');
    
      buttonReadMore.classList.add('element--hide');

    var mySwiper = new Swiper('.swiper', {
      loop: true,
      noSwiping: false,
      slidesPerView: 'auto',
      spaceBetween: 35,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
  else {
    NavigationPrices.classList.add('element--hide');
  }
});



  
