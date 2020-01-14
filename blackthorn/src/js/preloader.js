window.onload = function() {
    let preloader =     document.getElementById('preloader');
    let progressbar =   document.getElementById('preloader');
    let elem1 =         document.getElementById('elem1');
    let elem2 =         document.getElementById('elem2');
    let elem3 =         document.getElementById('elem3');
    
    function animation(){
        let header =        document.querySelector('.header__container');
        let logo =          document.querySelector('.header__logo');
        let navigation =    document.querySelector('.header__nav-list');
        let social =        document.querySelector('.header__social');
        let menuBtn =       document.querySelector('.menu-button');
        let introText =     document.querySelector('.header__intro-text--main');
        let decorTop =      document.querySelector('.header__intro-text--decorationTop');
        let decorBot =      document.querySelector('.header__intro-text--decorationBot');
        let scroll =        document.querySelector('.header__scroll');
        
        TweenLite.from(header,      1.6,{scale: 1.6, x: 200, y: 150 });
        TweenLite.to(logo,          1,  {delay: 1, opacity:1});
        TweenLite.to(navigation,    1,  {delay: 1, y: 0, opacity:1});
        TweenLite.to(social,        1,  {delay: 1.1, x: 0, opacity:1});
        TweenLite.to(menuBtn,       1,  {delay: 1.1, x: 0, opacity:1});
        TweenLite.fromTo(introText, 2,  {delay: 1.6, opacity:0, textShadow: "0px 0px 90px #ffffff"},{delay: 1.6, opacity:1, textShadow: "0px 0px 0px #ffffff"});
        
        TweenLite.to(decorTop,      1,{delay: 1.7, width: "279px" });
        TweenLite.to(decorBot,      1,{delay: 1.7, width: "249px" });
        TweenLite.to(scroll,        2   ,{delay: 1.3, opacity: 1 });
        
    }

    TweenMax.to(preloader, 1, {
        display: 'none', 
        opacity: 0,
        onComplete: animation(),
    })

    TweenMax.from([elem1, elem2, elem3], 1 , {opacity: 1});
    TweenMax.staggerFrom([elem1, elem2, elem3], 1.5, {rotation: 360,repeat: -1,},0.25);
}

