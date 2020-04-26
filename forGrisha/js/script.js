let content = document.querySelector('.content');
let image = document.querySelector('.content-img');

// content.addEventListener('mousemove', rotate)

// function rotate(event){
//     const halfHeight = image.offsetHeight / 2;
//     const halfWidth = image.offsetWidth / 2;
//     image.style.transform =`rotateX(${+ -(event.offsetY - halfHeight)/10}deg)
//                             rotateY(${(event.offsetX - halfWidth)/10}deg) 
//                             translateX(${+ -event.clientX/20}px) 
//                             translateY(${+ -event.clientY/20}px)`
// }


window.addEventListener('devicemotion', rotate)

function rotate(e){
    image.style.transform = `translateX(${e.acceleration.x}px) translateY(${e.acceleration.y}px)`
}