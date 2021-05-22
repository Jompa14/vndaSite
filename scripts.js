//  Evento de click para acionar o Menu Hamburguer
const hamburger = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

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
})

// esconde o menu hamburger quando o usuario der skroll (mobile)
window.onscroll = () => {
  navLinks.classList.remove("open");
}
