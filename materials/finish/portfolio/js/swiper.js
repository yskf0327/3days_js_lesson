const swiper = new Swiper('.swiper', {
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  loopAdditionalSlides: 0,
  breakpoints: {
    768: {
      spaceBetween: 20,
      centeredSlides: true,
    }
  }, // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


})