// let content = document.querySelector('.content');
// let image = document.querySelector('.content-img');

// // content.addEventListener('mousemove', rotate)

// // function rotate(event){
// //     const halfHeight = image.offsetHeight / 2;
// //     const halfWidth = image.offsetWidth / 2;
// //     image.style.transform =`rotateX(${+ -(event.offsetY - halfHeight)/10}deg)
// //                             rotateY(${(event.offsetX - halfWidth)/10}deg) 
// //                             translateX(${+ -event.clientX/20}px) 
// //                             translateY(${+ -event.clientY/20}px)`
// // }


// window.addEventListener('devicemotion', rotate, true)

// function rotate(e){
    
//     let text = document.querySelector('.content-text');
//     text.innerHTML = e.acceleration.x;
//     image.style.transform = `translateX(${e.acceleration.x}px) translateY(${e.acceleration.y}px)`

// }



   function onMotionChange(e) {

      let agZ = e.accelerationIncludingGravity.z -5;
      let agX = e.accelerationIncludingGravity.x;
      
      let text = document.querySelector('.test')

      text.style.transform = ` translateX(${agX*13}px)
                              translateY(${agZ*7}px) 
                              rotateX(${agZ*5}deg)
                              rotateY(${agX*13}deg)`
  }

  window.addEventListener('devicemotion', onMotionChange, true);