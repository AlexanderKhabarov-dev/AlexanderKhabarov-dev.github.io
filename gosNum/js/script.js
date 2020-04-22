document.addEventListener('input', (event) => {

    event.target.classList.contains('input');
    
    v1 = document.querySelector('#input_1').value;
    out_1 = document.querySelector('#output_1');

    v2 = document.querySelector('#input_2').value;
    out_2 = document.querySelector('#output_2');
    
    v3 = document.querySelector('#input_3').value;
    out_3 = document.querySelector('#output_3');

    v4 = document.querySelector('#input_4').value;
    out_4 = document.querySelector('#output_4');

    v5 = document.querySelector('#input_5').value;
    out_5 = document.querySelector('#output_5');

    v6 = document.querySelector('#input_6').value;
    out_6 = document.querySelector('#output_6');

    v7 = document.querySelector('#input_7').value;
    out_7 = document.querySelector('#output_7');

    v8 = document.querySelector('#input_8').value;
    out_8 = document.querySelector('#output_8');
    
    
 

    for(let i = 0; i < v1.length; i++){
        out_1.innerHTML = `<div class="num-text">${v1[i]}</div>`;
    }
    
    for(let i = 0; i < v2.length; i++){
        out_2.innerHTML = `<div class="num-text">${v2[i]}</div>`;
    }
    
    for(let i = 0; i < v3.length; i++){
        out_3.innerHTML = `<div class="num-text">${v3[i]}</div>`;
    }

    for(let i = 0; i < v4.length; i++){
        out_4.innerHTML = `<div class="num-text">${v4[i]}</div>`;
    }


    for(let i = 0; i < v5.length; i++){
        out_5.innerHTML = `<div class="num-text">${v5[i]}</div>`;
    }

    for(let i = 0; i < v6.length; i++){
        out_6.innerHTML = `<div class="num-text">${v6[i]}</div>`;
    }

    for(let i = 0; i < v7.length; i++){
        out_7.innerHTML = v7[i];
    }

    for(let i = 0; i < v8.length; i++){
        out_8.innerHTML = v8[i];
    }
}) 

// canvas

// let copyBtn = document.querySelector('.copy-btn');

// copyBtn.addEventListener('mousedown', copy);


// function copy(ev) {
//     html2canvas(document.querySelector(".num")).then(canvas => {
//         document.body.appendChild(canvas);
//     });
// }


function f_Date(el,n) {
    if(el.value.length>n)el.value=el.value.substr(n);
    if(el.value.length==n) el.nextSibling.nextSibling.focus();
  }
  
  