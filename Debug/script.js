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