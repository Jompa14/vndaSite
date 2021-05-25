//  Evento de click para acionar o Menu Hamburguer
const hamburger = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// esconde o menu hamburger quando o usuario der skroll (mobile)
window.onscroll = () => {
  navLinks.classList.remove("open");
}

// Inicia o Swiper
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  effect: 'cube',
  loop: true,
  speed: 500,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Lazy load das imagens com o Appear.js
appear({
  init: function init(){
    console.log("appear funcionando")
  },
  elements: function elements(){
    return document.querySelector('img[data-src]');
  },
  appear: function appear(elemento) {
    elemento.src = elemento.dataset.src;
  },
  bounds: 50
});
