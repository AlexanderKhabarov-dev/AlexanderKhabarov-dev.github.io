var mySwiper = new Swiper ('.header__slider-content', {
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
      },
      breakpoints: {
        960: {
          slidesPerView: 2,
        }

    }
  })

var mySwiper = new Swiper ('.others__container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})