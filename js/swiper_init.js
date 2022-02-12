var swiper = new Swiper('.blog-slider', {
  passiveListeners: true,
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
    disableOnInteraction: true,
    delay: 3000
  },
  mousewheel: false,
  // autoHeight: true,
  pagination: {