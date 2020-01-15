
if(document.body.clientWidth<540){
    let swiper1 = new Swiper('.swiper-container',{
        effect: 'coverflow',
        initialSlide: 0,
        slidesPerView: 1,
        loop: false,
        spaceBetween: 70,
        fadeEffect: {
            crossFade: true
          },
        coverflowEffect: {
          rotate: 0,
          stretch: 50,
          depth: 170,
          modifier: 1,
          slideShadows : 0,
        },
        pagination: {
          el: '.swiper-pagination',
        },
    });
}   else{
      let slide = document.querySelectorAll('.swiper-slide');
      let container = document.querySelectorAll('.swiper-container');
      let wrapper = document.querySelectorAll('.swiper-wrapper');
      
      slide.forEach(function(item) {
      item.classList.remove("swiper-slide");
      })
  
      container.forEach(function(item) {
      item.classList.remove("swiper-container");
      })
  
      wrapper.forEach(function(item) {
      item.classList.remove("swiper-wrapper");
      })    
  };
  