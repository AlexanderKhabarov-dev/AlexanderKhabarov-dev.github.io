let btn = document.querySelector('.btn');
let text = document.querySelector('.text');
let main = document.querySelector('.main');
let input = document.querySelector('#inputNum');

btn.onclick = () =>{
    if(text.style.display == "block"){
        text.style.display = "none"
    }
    else{
        text.style.display = "block";
    }
}

input.oninput = () =>{
    console.log(input.value)
    text.innerHTML = input.value
}
/*btn.addEventListener('mousedown', function(){
    if(text.style.display == "block"){
        text.style.display = "none"
    }
    else{
        text.style.display = "block";
    }
})

main.onclick = () =>{
    console.log('123')
}
*/
