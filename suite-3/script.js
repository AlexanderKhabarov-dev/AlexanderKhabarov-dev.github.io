let dots = document.getElementsByClassName('dots-item'),
    dotsArea = document.getElementsByClassName('dots-block')[0],
    slides = document.getElementsByClassName('slides-item'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    slideIndex = 1;

    showSLides(slideIndex);

function showSLides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    }
    else if (n > slides.length){
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display ='block';
    dots[slideIndex - 1].classList.add('active');
}


function plusSlides(n) {
    showSLides(slideIndex +=n);
}

function currentSlide (n) {
    showSLides(slideIndex = n);
}
prevBtn.onclick = function() {
    plusSlides(-1);
}
nextBtn.onclick = function() {
    plusSlides(1);
}

dotsArea.onclick = function (e){
    for (let i = 0; i < dots.length + 1; i++){
        if (e.target.classList.contains('dots-item') && e.target ==dots[i -1]){
            currentSlide(i);
        }
    }
}

// ==== POP-UP ===
    function show(state)
    {
    document.getElementById('window').style.display = state;	
    document.getElementById('close').style.display = state; 		
}	

// === /POP-up ===

// === carousel ===
    
    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }
// === /carousel ===

