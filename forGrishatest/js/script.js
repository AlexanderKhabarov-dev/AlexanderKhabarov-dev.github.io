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


var nodeAG = document.getElementById('accelerationIncludingGravity');
   var maxAG = 0;
   function onMotionChange(e) {
     // покажем значения параметров в реальном времени
     var ag = e.accelerationIncludingGravity;
     nodeAG.innerHTML = '';
     for(var i in ag){
        nodeAG.innerHTML += i + ' = ' + ag[i].toFixed(2) + '</br>';
        if(Math.abs(maxAG) < Math.abs(ag[i])){
          maxAG = ag[i];
        }
     }
     nodeAG.innerHTML += '<strong>MAX = '+maxAG.toFixed(2)+'</strong></br>';
     if(ag.x > ag.y && ag.x > ag.z){ nodeAG.innerHTML += '<span>Горизонтально перед собой</span>';}
     if(ag.y > ag.x && ag.y > ag.z){ nodeAG.innerHTML += '<span>Вертикально перед собой</span>';}
     if(ag.z > ag.x && ag.z > ag.y){ nodeAG.innerHTML += '<span>На столе</span>';}
  }
  window.addEventListener('devicemotion', onMotionChange, true);