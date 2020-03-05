let radio = document.querySelectorAll('input[type=radio]');
let input = document.querySelector('.input-quantity');
let btn = document.querySelector('.btn');
let out = document.querySelector('.out');


btn.addEventListener('click', calc);


function calc(){
    a = 0;
    b = 0;
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked && radio[i].value == 'bar') {
            a = parseFloat(input.value, 10) * 750.062;
        }
        if(radio[i].checked && radio[i].value == 'mm') {
            b = parseFloat(input.value, 10) / 750.062;
        }
    }
    if(a > 0){
        out.textContent = `${a.toFixed(4)} (мм.рт.ст)`
    }
    else if(b > 0 ){
        out.textContent = `${b.toFixed(4)} (бар)`
    }
    else{
        out.textContent = `Ошибка`
    }
}