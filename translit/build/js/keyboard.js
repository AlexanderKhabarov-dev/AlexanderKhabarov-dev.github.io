const keyboard = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46]
const keyboardEng = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

function init(){
    let out = '';
    for(let i = 0; i< keyboard.length; i++){
        if(i == 12 || i==23){
            out += '<div class="clearfix"></div>'
        }
        out +=`<div class="keyboard__key" data="${keyboard[i]}"> ${String.fromCharCode(keyboard[i])} </div>`;
    }
    document.querySelector('#keyboardBtn').innerHTML = out;
}
init();



document.onkeypress = function(event){
    
    if(event.keyCode > 122  ){
        let key = document.querySelector('.keyboard__key[data="' + event.keyCode +'"]');

        key.classList.add('active'); 

        setTimeout(function() {
            key.classList.remove('active');
        }, 300);
    }
}

// === test ===
// let m = [];
// document.onkeypress = function test(event){
//     //console.log(event);
//     m.push(event.keyCode);
//     console.log(m);
// }