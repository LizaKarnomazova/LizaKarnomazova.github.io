let companyNavigation = document.querySelector('.services-navigation__list');
let buttonReadMore = document.querySelector('.button-open');
let buttonClose = document.querySelector('.button-close');
buttonReadMore.addEventListener('click', function () {
    companyNavigation.classList.remove('navigation__list--hide');
    buttonClose.classList.remove('button__hide');
    buttonReadMore.classList.add('button__hide');
});

buttonClose.addEventListener('click', function () {
    companyNavigation.classList.add('navigation__list--hide');
    buttonClose.classList.add('button__hide');
    buttonReadMore.classList.remove('button__hide');
});