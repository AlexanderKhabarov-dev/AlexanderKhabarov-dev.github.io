let tlMenu = new TimelineMax({paused:true}), forward = true;
let navItem = document.querySelectorAll('.header__menu-nav-item');
let menuToggle = document.querySelector('.header__menu-toggle');


tlMenu.to('#hamburgerTop', .1,{
    rotation: 45,
    y: 6
})
.to('#hamburgerBot', .1,{
    rotation: -45,
   
})

.to('.header__menu', .7,{
    opacity:1,
    y:620,
})



// tlMenu.to('#hamburgerTop', .1, {
//     y:90,
//     rotation: 45, 
// })

// .to('#hamburgerBot', .1, {
//     y:69,
//     rotation: -45,
// })
// .staggerFromTo([
//     '.header__menu',
//     navItem,
// ], .3,{
//     delay: 0.1,
//     ease: Back.easeOut.config(1),
//     opacity:0,
//     y:-150,
// },{
//     opacity:1,
//     y:0,
// })

menuToggle.addEventListener('click', () => {
    if(forward){
    tlMenu.play();
    }else{
    tlMenu.reverse();
    }
  forward = forward  ? false : true;
});