let circle = document.querySelector('.main__decoration-circle');
let bolt = document.querySelector('.main__decoration-bolt');



function onMotionChange(e) {

    let agZ = e.accelerationIncludingGravity.z -5;
    let agX = e.accelerationIncludingGravity.x;

    bolt.style.transform = `translateX(${agX*13}px)
                            translateY(${agZ*7}px) 
                            rotateX(${agZ*5}deg)
                            rotateY(${agX*13}deg)`

    circle.agZ = -10;

    circle.style.transform = `translateX(${agX*2}px)
                              translateY(${agZ*2}px) 
                             `

}

window.addEventListener('devicemotion', onMotionChange, true);