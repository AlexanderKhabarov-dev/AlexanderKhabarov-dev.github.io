let copyText = document.querySelector('.copy__button');
let copyComplete = document.querySelector('.copy__complete');

copyText.addEventListener('click', () => {
    output.select();
    document.execCommand("copy");
    copyComplete.classList.add('copy__complete-active');
    setTimeout(function() {
        copyComplete.classList.remove('copy__complete-active');
    }, 1500);
})


