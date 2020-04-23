window.onload = () =>{
    let preloader = document.querySelector('.preloader');

    TweenMax.to(preloader, 1, {
        display: 'none', 
        opacity: 0,
        delay: .5,
    })

   
}