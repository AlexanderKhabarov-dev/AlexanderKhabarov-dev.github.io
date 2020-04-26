let content = document.querySelector('.content');

content.addEventListener('orientationchange', rotate)

function rotate(event){
    const image = this.querySelector('.content-img');
    const halfHeight = image.offsetHeight / 2;
    const halfWidth = image.offsetWidth / 2;
    image.style.transform =`rotateX(${+ -(event.offsetY - halfHeight)/10}deg)  rotateY(${(event.offsetX - halfWidth)/10}deg)`
}