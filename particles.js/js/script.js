window.onload = () =>{

    let form = document.querySelector('.form');
    let title1 = document.querySelector('#title_1');
    let title2 = document.querySelector('#title_2');
    

    // появление/исчезание заголовка через css
    title1.classList.add('title_active')

    // появление второго заголовка
    setTimeout(() => {
        title2.classList.add('title_active')
    },2000)

    setTimeout(() =>{
        form.style.opacity = 1;
    },4000)

}
