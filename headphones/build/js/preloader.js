window.onload = () =>{
    let preloader = document.querySelector('.preloader');
    setTimeout(() =>{
        preloader.style.opacity = 0;
    }, 1000)
    setTimeout(() =>{
        preloader.style.display = "none";
    }, 1300)
}