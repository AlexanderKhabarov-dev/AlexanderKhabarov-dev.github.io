window.onload = () =>{
    let preloader = document.querySelector('.preloader');
    // let item1 = document.querySelector('.preloader__item_1');
    // let item2 = document.querySelector('.preloader__item_2');

    TweenMax.to(preloader, 1, {
        display: 'none', 
        opacity: 0,
        delay: 2,
    })

    // TweenMax.to([item1, item2,], 1 , {opacity: 1});
    // TweenMax.staggerFrom([item1, item2,], 1.5, {rotation: 360,repeat: -1,},0.25);

    // TweenMax.fromTo(item1,  1,  { x: 50}, { x: 0});
}