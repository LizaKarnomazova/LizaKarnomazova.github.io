/* button */

let companyNavigation = document.querySelector('.services-navigation__list');
let buttonReadMore = document.querySelector('.button-readMore');
buttonReadMore.textContent = 'Показать всё';
    
buttonReadMore.addEventListener('click', function () {
    if (buttonReadMore.textContent === 'Показать всё') {
        companyNavigation.classList.remove('navigation__list--hide');
        buttonReadMore.classList.add('button-close');
        buttonReadMore.textContent = 'Скрыть';
    }
    else {
        companyNavigation.classList.add('navigation__list--hide');
        buttonReadMore.classList.remove('button-close');
        buttonReadMore.textContent = 'Показать всё';
    }
 });

/* swiper */

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        noSwiping: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
