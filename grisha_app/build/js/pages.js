let main = document.querySelector('.main');
let welcome = document.querySelector('.welcome');
let toggleBolt = document.querySelector('#toggleBolt');
let toggleWelcome = document.querySelector('#toggleWelcome');


toggleBolt.addEventListener('click', linkBolt);
toggleWelcome.addEventListener('click', linkWelcome);

function linkWelcome(){
    main.style.display = "none";
    welcome.style.display = "block";
    console.log('ok');
}

function linkBolt (){
    main.style.display = "block";
    welcome.style.display = "none";
}
console.log('ok')