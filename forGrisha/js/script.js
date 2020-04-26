let content = document.querySelector('.content');

window.addEventListener('orientationchange', rotate)

function rotate(event){
    const image = document.querySelector('.content-img');
    const halfHeight = image.offsetHeight / 2;
    const halfWidth = image.offsetWidth / 2;
    //image.style.transform =`rotateX(${+ -(event.offsetY - halfHeight)/10}deg)  rotateY(${(event.offsetX - halfWidth)/10}deg)`
    image.style.transform = `rotateX${event.orentation / 2}deg rotateY${event.orentation / 2}deg`
    // console.log(event.orentation)
    //
}