   
let swiper3 = new Swiper('.swiper-container',{
    initialSlide: 1,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    autoplay:{
        delay:5000,
    },
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
  });

  let swiper4 = new Swiper('.swiper-container2',{
    initialSlide: 1,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 30,
    autoplay:{
        delay:6000,
    },

    breakpoints: {
      540: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
