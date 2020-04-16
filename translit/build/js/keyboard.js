const keyboard = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46]

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

let key = document.querySelectorAll('.keyboard__key');

document.onkeypress = function(event){
    // console.log(event.code);
    // console.log(event.keyCode);
    if(event.keyCode > 122  ){
        key.forEach(function(element){
            element.classList.remove('active');
        })
        document.querySelector('.keyboard__key[data="' + event.keyCode +'"]').classList.add('active'); // Ошибка! из за того, что нету символов на виртуальной клавиатуре
    }
    if(event.keyCode < 122 || event.keyCode != 32 || event.keyCode != 63 || event.keyCode != 68 ){ //Костыль! исправить(Скорее всего добавление всех клавиш на клавиатуре)
        //console.log('error');
        errorMessage.classList.add('error__active');
        setTimeout(function() {
            errorMessage.classList.remove('error__active');
        }, 1700);
    }
}


// === for click ===
// key.forEach(function(element){
//     element.onclick = function(event){
//         document.querySelectorAll('.keyboard__key').forEach(function(element){
//             element.classList.remove('active');
//         });
//         let code = this.getAttribute('data');
//         this.classList.add('active');
//         //console.log(code);
//     }
// });

// === test ===
// let m = [];
// document.onkeypress = function test(event){
//     //console.log(event);
//     m.push(event.keyCode);
//     console.log(m);
// }