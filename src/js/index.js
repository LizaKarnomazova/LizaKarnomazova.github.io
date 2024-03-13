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
let buttonShow = function (container, buttonText) {

  let navigationContainer = document.querySelector(container);
  let navigationList = navigationContainer.querySelector('.navigation__list');
  let buttonReadMore = navigationContainer.querySelector('.button-readMore');

  buttonReadMore.textContent = buttonText;

  buttonReadMore.addEventListener('click', function () {
    if (buttonReadMore.textContent === buttonText) {
      navigationList.classList.remove('navigation__list--hide');
      buttonReadMore.classList.add('button-close');
      buttonReadMore.textContent = 'Скрыть';
    }
    else {
      navigationList.classList.add('navigation__list--hide');
      buttonReadMore.classList.remove('button-close');
      buttonReadMore.textContent = buttonText;
    }
  });
};

buttonShow('.article__specification__info', 'Читать далее');
buttonShow('.article__brands', 'Показать все');
buttonShow('.article__devices', 'Показать все');

console.log('Works!');
