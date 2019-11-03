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
  let element = document.querySelectorAll('.swiper-slide');
  let element2 = document.querySelectorAll('.swiper-button-prev');
  let element3 = document.querySelectorAll('.swiper-button-next');
  let element4 = document.querySelectorAll('.swiper-container_2');
  let element5 = document.querySelectorAll('.swiper-container3');
  let element6 = document.querySelectorAll('.swiper-wrapper');
  element.forEach(function(item) {
    item.classList.remove("swiper-slide");
  })
  element2.forEach(function(item) {
    item.classList.remove("swiper-button-prev");
  })
  element3.forEach(function(item) {
    item.classList.remove("swiper-button-next");
  })
  element4.forEach(function(item) {
    item.classList.remove("swiper-container_2");
  })
  element5.forEach(function(item) {
    item.classList.remove("swiper-container3");
  })
  element6.forEach(function(item) {
    item.classList.remove("swiper-wrapper");
  })
  
}