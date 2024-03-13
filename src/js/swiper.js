
/* swiper */


let SwiperShow = function (container) {

  let navigationContainer = document.querySelector(container);

  let NavigationList = navigationContainer.querySelector('.swiper-navigation__list');
  let NavigationItem = NavigationList.querySelectorAll('.swiper-navigation__item');
  let buttonReadMore = navigationContainer.querySelector('.button-readMore');

  const breakpoint = window.matchMedia('(max-width:760px)');

  if (breakpoint.matches === true) {

    for (let i = 0; i < NavigationItem.length; i++) {
      NavigationItem[i].classList.add('swiper-navigation__item--width');
    }

    NavigationList.classList.remove('navigation__list--hide');
    NavigationList.classList.add('swiper-navigation__list--mobile');
    
    buttonReadMore.classList.add('element--hide');

    let swiper = navigationContainer.querySelector('.swiper');

    new Swiper(swiper, {
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
  
};

SwiperShow('.article__brands');
SwiperShow('.article__devices');
SwiperShow('.article__prices');

  
