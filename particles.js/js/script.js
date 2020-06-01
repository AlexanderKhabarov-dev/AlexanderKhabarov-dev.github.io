window.onload = () =>{
    let title1 = document.querySelector('#title_1');
    let title2 = document.querySelector('#title_2');

    title1.classList.add('title_active')

    setTimeout(() => {
        title2.style.opacity = 1;
    },2000)
}