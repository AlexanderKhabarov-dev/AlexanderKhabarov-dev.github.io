   
let swiper2 = new Swiper('.swiper-container',{
    effect: 'coverflow',
    initialSlide: 1,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    autoplay:{
        delay:5000,
    },
    fadeEffect: {
        crossFade: true
      },
    coverflowEffect: {
      rotate: 0,
      stretch: 730,
      depth: 170,
      modifier: 1,
      slideShadows : 0,
    },
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
  });
  
    