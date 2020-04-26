let content = document.querySelector('.content');

window.addEventListener('devicemotion', rotate)

function rotate(event){
    const image = document.querySelector('.content-img');
    
    image.style.transform =`rotateX${event.acceleration.x / 2}deg rotateY${event.acceleration.y/ 2}deg`
    
    
    
    
    // const halfHeight = image.offsetHeight / 2;
    // const halfWidth = image.offsetWidth / 2;


    // image.style.transform =`rotateX(${+ -(event.offsetY - halfHeight)/10}deg)  rotateY(${(event.offsetX - halfWidth)/10}deg)`
    // image.style.transform = `rotateX${event.orentation / 2}deg rotateY${event.orentation / 2}deg`
    // console.log(event.orentation)
    //
}