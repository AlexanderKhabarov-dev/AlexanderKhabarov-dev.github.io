let popUpForm = document.getElementById('popUpForm'),
popUpToggleForm1 = document.getElementById('btn1'),
popUpToggleForm2 = document.getElementById('btn2'),
popUpToggleForm3 = document.getElementById('btn3'),
popUpToggleForm4 = document.getElementById('btn4'),
popUpCloseForm = document.getElementById('close');

popUpToggleForm1.onclick = function(){
    popUpForm.style.display = "block";
}
popUpToggleForm2.onclick = function(){
    popUpForm.style.display = "block";
}
popUpToggleForm3.onclick = function(){
    popUpForm.style.display = "block";
}
popUpToggleForm4.onclick = function(){
    popUpForm.style.display = "block";
}
popUpCloseForm.onclick = function(){
    popUpForm.style.display = "none";
}
window.onclick = function(e){
    if(e.target == popUp) {
        popUpForm.style.display = "none";
    }
}

let popUpSuccessful = document.getElementById('popUpSuccessfulPayment'),
popUpToggleSuccessful = document.getElementById('popUp-1'),
popUpCloseSuccessful = document.getElementById('close1');

popUpToggleSuccessful.onclick = function(){
    popUpSuccessful.style.display = "block";
}
popUpCloseSuccessful.onclick = function(){
    popUpSuccessful.style.display = "none";
}

window.onclick = function(e){
    if(e.target == popUpSuccessful) {
        popUpSuccessful.style.display = "none";
    }
}

let popUpFailed = document.getElementById('popUpFailedPayment'),
popUpToggleFailed = document.getElementById('popUp-2'),
popUpCloseFailed = document.getElementById('close2');

popUpToggleFailed.onclick = function(){
    popUpFailed.style.display = "block";
}
popUpCloseFailed.onclick = function(){
    popUpFailed.style.display = "none";
}
window.onclick = function(e){
    if(e.target == popUpFailed) {
        popUpFailed.style.display = "none";
    }
}
    
    
