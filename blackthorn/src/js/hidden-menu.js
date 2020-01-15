let toggleMenu =   document.querySelector ('.menu-button');
let closeMenu =    document.querySelector ('.menu-hidden__close');

let tlMenu = new TimelineMax({paused:true});
const duration = .2;

tlMenu.to('.menu', .5 ,{
    zIndex: 999,
    opacity: 1, 
    ease:Expo.easeInOut,
})
.to('.menu-hidden', 1 ,{
    right: "0",
})
.to('.menu-hidden__language', duration ,{
    opacity: 1,
})

.to('.menu-hidden__cart-icon', duration ,{
    opacity: 1,
})
.to('.menu-hidden__nav-item--1', duration ,{
    opacity: 1,
    duration: 5,
    y: 0,
    ease:Back.easeOut.config(1.7)
})
.to('.menu-hidden__nav-item--2', duration ,{
    opacity: 1,
    duration: 5,
    y: 0,
    ease:Back.easeOut.config(1.7)
})
.to('.menu-hidden__nav-item--3', duration ,{
    opacity: 1,
    duration: 5,
    y: 0,
    ease:Back.easeOut.config(1.7)
})
.to('.menu-hidden__feedback', duration ,{
    opacity: 1,  
    duration:5,
    y:0,
    ease:Back.easeOut.config(1.7)
})
.to('.menu-hidden__social-button--1', duration ,{
    opacity: 1,
    duration:5,
    y:0,  
    ease: Back.easeOut.config(1.7)
})
.to('.menu-hidden__social-button--2', duration ,{
    opacity: 1,
    duration:5,
    y:0,
    ease: Back.easeOut.config(1.7)  
})
.to('.menu-hidden__social-button--3', duration ,{
    opacity: 1,
    duration:5,
    y:0,
   ease: Back.easeOut.config(1.7)
})






toggleMenu.addEventListener('click', () => {
    tlMenu.play();
});

closeMenu.addEventListener('click', () => {
    tlMenu.reverse();
});


