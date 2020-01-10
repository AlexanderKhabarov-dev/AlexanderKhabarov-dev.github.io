(function() {
    let preloader = document.getElementById('preloader');
    let elem1 = document.getElementById('elem1');
    let elem2 = document.getElementById('elem2');
    let elem3 = document.getElementById('elem3');

    TweenMax.to(preloader, 1, {delay:3, display: 'none', opacity: 0})

    TweenMax.staggerFrom([elem1, elem2, elem3], 1.5, {rotation: 360, repeat: -1}, 0.25);
})