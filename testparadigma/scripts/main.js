let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.popup-show');
let closePopupButton = document.querySelector('.popup-hidden');
let mouseButton = document.querySelector('.button--back');
let checkbox = document.querySelector('.check');
let submitButton = document.querySelector('.form--button');


openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--open');
});


closePopupButton.addEventListener('click', function () {
    popup.classList.remove('popup--open');
});


document.addEventListener('keydown' , function (evt) {
    if (evt.keyCode === 27) {
      popup.classList.remove('popup--open');
    }
});


mouseButton.onclick = () =>  document.getElementById("begin").scrollIntoView({behavior: "smooth"});


submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    alert("Спасибо, скоро с вами свяжется наш специалист");
});


checkbox.addEventListener("change", function () {
if (!checkbox.checked) {
    submitButton.setAttribute("disabled", "");
} else if (checkbox.checked) {
    submitButton.removeAttribute("disabled");
}
});


let buttonMobile = document.querySelector('.mobile--menu')
let burgerMenuBtn = document.getElementById('menu-toggle')
let nav = document.querySelector('nav')
let header = document.querySelector('.header--top')
let body = document.querySelector('body')
let main = document.querySelector('.main--container')
let mobileMenuFooter = document.querySelector('.mobile--menu--footer-hidden')

burgerMenuBtn.addEventListener("change", function () {
    header.classList.toggle('header--mobile');
    body.classList.toggle('mobile');
    main.classList.toggle('main--none');
    nav.classList.toggle('mobile--nav');
    buttonMobile.classList.toggle('fixed');
    mobileMenuFooter.classList.toggle('mobile--menu--footer-visibility')
})
