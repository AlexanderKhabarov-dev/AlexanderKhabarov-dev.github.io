input = document.querySelector('.translit__in-input');
output = document.querySelector('.translit__out-textarea');

// input.addEventListener('input',()=> {
//     input.value = input.value.replace(/[^а-я]/,'');
// });
	

function ruToLate(event){
    const ru = {
        'а':'4', 'б':'b', 'в':'v', 'г':'6', 'д':'d', 'е':'3', 'ж':'j', 'з':'z',
        'и':'1', 'й':'io', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'0', 'п':'p',
        'р':'r', 'с':'5', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c', 'ч':'ch', 
        'ш':'sh', 'ы':'i', 'ь':"'", 'э':'3', 'ю':'iu', 'я':'ya',

        '1':'1', '2':'2', '3':'3', '4':'4', '5':'5', '6':'6', '7':'7', '8':'8',
        '9':'9', '0':'0',
            
        ',':',', '!':'!', '?':'?', ' ':' ', '.':'.',
    }
    
    

    let text = input.value;
    let str = '';
    for(let i = 0; i < text.length; i++){

        let k = text[i];

        if(ru[k] != undefined){
            str += ru[k];
        }
        else{
            if((ru[k.toLowerCase()])) {
                let s = ru[k.toLowerCase()];
                str += s.toUpperCase();
            }
        }
    }
    output.innerText = str;
    if(str.length < 90){
        str += '<div class="clearfix"></div>';
    }
}
input.oninput = ruToLate;





