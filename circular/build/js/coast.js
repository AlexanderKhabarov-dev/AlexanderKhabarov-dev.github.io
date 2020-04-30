const time = 200; //ms
const step = 1;

function outNum (num, elem){
    let coast = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time / (num/step));
    let interval = setInterval(() => {
        n = n + step;
        
        if(n == num){
            clearInterval(interval);
        }

        coast.innerHTML = n; 
    },
        t)
}

console.log('ok')
