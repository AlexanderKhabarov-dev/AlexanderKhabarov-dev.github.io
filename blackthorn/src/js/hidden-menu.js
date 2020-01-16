let toggleMenu =   document.querySelector ('.menu-button');
let closeMenu =    document.querySelector ('.menu-hidden__close');

let tlMenu = new TimelineMax({paused:true});
const duration = .1;

tlMenu.to('.menu', .2 ,{
    zIndex: 999,
    opacity: 1, 

})

.fromTo('.menu-hidden', .3 ,{bottom: "80%", },{bottom:"0",right:0}
)

.staggerTo([
            '.menu-hidden__language-link--1',
            '.menu-hidden__language-link--2',
            '.menu-hidden__cart-icon',
            '.menu-hidden__nav-item--1',
            '.menu-hidden__nav-item--2',
            '.menu-hidden__nav-item--3',
            '.menu-hidden__nav-item--4',
            '.menu-hidden__nav-item--5',
            '.menu-hidden__nav-item--6',
            '.menu-hidden__feedback',
            '.menu-hidden__social-button--1',
            '.menu-hidden__social-button--2',
            '.menu-hidden__social-button--3'
             ], .4,{
    delay: 0.1,
    ease: Back.easeOut.config(1),
    opacity:1,
    y:0,
},
    0.1,
    "start")

toggleMenu.addEventListener('click', () => {
    tlMenu.play();
});

closeMenu.addEventListener('click', () => {
    tlMenu.reverse();
});


