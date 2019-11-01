let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    slidesPerView: 3,
    initialSlide: 1,
    loop: true,
    fadeEffect: {
        crossFade: true
      },
      
    coverflowEffect: {
      rotate: 0,
      stretch: -75,
      depth: 170,
      modifier: 1,
      slideShadows : 0,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });