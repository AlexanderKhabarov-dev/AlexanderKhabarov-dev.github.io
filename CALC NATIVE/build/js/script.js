
let radioIn = document.querySelectorAll('.radio-in')

let radioBarIn = document.querySelector('#radioBarIn');
let radioMmIn = document.querySelector('#radioMmIn');
let radioPsiIn = document.querySelector('#radioPsiIn');

let radioBarOut = document.querySelector('#radioBarOut');
let radioMmOut = document.querySelector('#radioMmOut');
let radioPsiOut = document.querySelector('#radioPsiOut');

let inputQuantity = document.querySelector('.input-quantity');
let btnOut = document.querySelector('.btn-out');
let textOut = document.querySelector('.text-out');


btnOut.addEventListener('click', calc);

function calc(){
    value = inputQuantity.value;

    //bar
    if(radioBarIn.checked && radioBarOut.checked){
        value = parseFloat(inputQuantity.value, 10);
        textOut.textContent = `${value} бар`
    }
    else if(radioBarIn.checked && radioMmOut.checked){
        value = parseFloat(inputQuantity.value, 10) * 750.062;
        textOut.textContent = `${value} мм.рт.ст`
    }
    else if(radioBarIn.checked && radioPsiOut.checked){
        value = parseFloat(inputQuantity.value, 10) / 14.5038;
        textOut.textContent = `${value} psi`
    }
    //mm.rt.st
    else if(radioMmIn.checked && radioBarOut.checked){
        value = parseFloat(inputQuantity.value, 10) / 750.062;
        textOut.textContent = `${value} бар`
    }
    else if(radioMmIn.checked && radioMmOut.checked){
        value = parseFloat(inputQuantity.value, 10);
        textOut.textContent = `${value} мм.рт.ст`
    }
    else if(radioMmIn.checked && radioPsiOut.checked){
        value = parseFloat(inputQuantity.value, 10) / 51.715;
        textOut.textContent = `${value} psi`
    }
    //psi
    else if(radioPsiIn.checked && radioBarOut.checked){
        value = parseFloat(inputQuantity.value, 10) / 14.504;
        textOut.textContent = `${value} бар`
    }
    else if(radioPsiIn.checked && radioMmOut.checked){
        value = parseFloat(inputQuantity.value, 10) * 51.715;
        textOut.textContent = `${value} мм.рт.ст`
    }
    else if(radioPsiIn.checked && radioPsiOut.checked){
        value = parseFloat(inputQuantity.value, 10);
        textOut.textContent = `${value} мм.рт.ст`
    }
    

    console.log(value.toFixed(5));
}
