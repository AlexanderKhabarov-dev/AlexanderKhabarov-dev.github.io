let othersSwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      640: {
        slidesPerView: 3,
      }
    },
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 10000,
    },
    fadeEffect: {
        crossFade: true
      },
    coverflowEffect: {
      rotate: 0,
      stretch: -75,
      depth: 150,
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

if (document.body.clientWidth<540){
  let advantagesSwiper = new Swiper('.swiper-container_2',{
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  let gettingSwiper = new Swiper('.swiper-container3',{
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  let changeSwiper = new Swiper('.swiper-container4',{
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

else if(document.body.clientWidth>540){
  let slide = document.querySelectorAll('.swiper-slide');
  let container2 = document.querySelectorAll('.swiper-container_2');
  let container3 = document.querySelectorAll('.swiper-container3');
  let wrapper = document.querySelectorAll('.swiper-wrapper');
  let othersSlide = document.querySelectorAll(".section-others__content");
  slide.forEach(function(item) {
    item.classList.remove("swiper-slide");
  })
  container2.forEach(function(item) {
    item.classList.remove("swiper-container_2");
  })
  container3.forEach(function(item) {
    item.classList.remove("swiper-container3");
  })
  wrapper.forEach(function(item) {
    item.classList.remove("swiper-wrapper");
  })  
  othersSlide.forEach(function(item) {
    item.classList.add("swiper-slide");
  })  
}
let othersWrapper = document.querySelector(".section-others__wrapper");
othersWrapper.classList.add("swiper-wrapper");













