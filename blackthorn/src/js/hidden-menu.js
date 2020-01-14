let menu = document.getElementById('hidden-menu');
let close = document.getElementById('close');
let toggle = document.getElementById('toggle');

toggle.onclick = function () {
    menu.style.display = "block";
}
close.onclick = function () {
    menu.style.display = "none";
}

window.onclick = function(e){
    if(e.target == menu) {
        menu.style.display = "none";
    }
}