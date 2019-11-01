if (document.body.clientWidth<540){
      let mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView:1,
        speed:900,
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    })
   }	
else if(document.body.clientWidth>540){
  let element = document.querySelectorAll('.swiper-slide');
  let element2 = document.querySelectorAll('.swiper-button-prev');
  let element3 = document.querySelectorAll('.swiper-button-next');
  element.forEach(function(item) {
    item.classList.remove("swiper-slide");
  })
  element2.forEach(function(item) {
    item.classList.remove("swiper-button-prev");
  })
  element3.forEach(function(item) {
    item.classList.remove("swiper-button-next");
  })
}
