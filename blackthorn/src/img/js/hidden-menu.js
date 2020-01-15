let toggleMenu =   document.querySelector ('.menu-button');
let closeMenu =    document.querySelector ('.menu-hidden__close');

let tlMenu = new TimelineLite({paused:true});

tlMenu.to('.menu', .5 ,{
    zIndex: 1,
    opacity: 1, 
})
.to('.menu-hidden', 1 ,{
    x: "-100%",
})


toggleMenu.addEventListener('click', () => {
    tlMenu.play();
});

closeMenu.addEventListener('click', () => {
    tlMenu.reverse();
});


