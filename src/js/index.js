import '../scss/style.scss';
import '../scss/buttons.scss';
import '../scss/navigation.scss';
import '../scss/fonts.scss';
import '../js/swiper.js';


/* button-order */

let articlePrices = document.querySelector('.article__prices');
let buttonOrder = articlePrices.querySelectorAll('.link__button-order');

for (let i = 0; i < buttonOrder.length; i++) {
  buttonOrder[i].textContent = 'Заказать';
}

/* burger sidebar */

let content = document.querySelector('.content');
let sidebarBurger = document.querySelector('.sidebar__menu--burger');
let buttonBurger = document.querySelector('.icon-button--burger');

const breakpoint_max1060 = window.matchMedia('(max-width:1060px)');
const breakpoint_min1060 = window.matchMedia('(min-width:1060px)');

if (breakpoint_max1060.matches === true) {

  sidebarBurger.classList.add('element--hide');

  buttonBurger.addEventListener('click', function () {
    sidebarBurger.classList.remove('element--hide');
    content.classList.add('decoration-blur');
    content.classList.add('element-noScroll');

    let buttonClose = sidebarBurger.querySelector('.icon-button--close');

    buttonClose.addEventListener('click', function () {
      sidebarBurger.classList.add('element--hide');
      content.classList.remove('decoration-blur');
      content.classList.remove('element-noScroll');
    });
  });
}

if (breakpoint_min1060.matches === true) {
  sidebarBurger.classList.remove('decoration-pageShadow');
}


/* right sidebars */

let rightSidebarShow = function (buttonClass, sidebarClass) {

  let buttonsSidebar = document.querySelectorAll(buttonClass);
  let sidebar = document.querySelector(sidebarClass);

  buttonsSidebar.forEach((buttonSidebar) => {
    buttonSidebar.addEventListener('click', function () {
      sidebar.classList.remove('element--hide');
      content.classList.add('decoration-blur');
      sidebarBurger.classList.add('decoration-blur');
      content.classList.add('element-noScroll');

      let buttonClose = sidebar.querySelector('.icon-button--close');

      buttonClose.addEventListener('click', function () {
        sidebar.classList.add('element--hide');
        sidebarBurger.classList.remove('decoration-blur');

        if (sidebarBurger.classList.contains('element--hide') === true) {
          content.classList.remove('decoration-blur');
          content.classList.remove('element-noScroll');
        }

        if (breakpoint_min1060.matches === true) {
          content.classList.remove('decoration-blur');
          content.classList.remove('element-noScroll');
        }
      });
    });
  });
};

rightSidebarShow('.icon-button--chat', '.sidebar__menu--chat');
rightSidebarShow('.icon-button--call', '.sidebar__menu--call');


/* button-readMore */

let NavigationContainers = document.querySelectorAll('.article');

NavigationContainers.forEach((navigationContainer) => {
  let NavigationList = navigationContainer.querySelector('.navigation__list');
  let buttonReadMore = navigationContainer.querySelector('.button-readMore');

  if (NavigationList.classList.contains('article__specification__text') === true) {
    buttonReadMore.textContent = 'Читать далее';
  }
  else {
    buttonReadMore.textContent = 'Показать всё';
  }
  

  buttonReadMore.addEventListener('click', function () {
    if (buttonReadMore.textContent === 'Показать всё' || buttonReadMore.textContent === 'Читать далее') {
      NavigationList.classList.remove('navigation__list--hide');
      buttonReadMore.classList.add('button-close');
      buttonReadMore.textContent = 'Скрыть';
    }
    else {
      NavigationList.classList.add('navigation__list--hide');
      buttonReadMore.classList.remove('button-close');
      if (NavigationList.classList.contains('article__specification__text') === true) {
        buttonReadMore.textContent = 'Читать далее';
      }
      else {
        buttonReadMore.textContent = 'Показать всё';
      }
    }
  });
});

console.log('Works!');
