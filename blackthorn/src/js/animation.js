window.onload = function() {
    let preloaderText = document.getElementById('preloaderText');
    let progressbar = document.getElementById('progressbar');

    TweenLite.to(preloaderText, 3, {x:"860px"} )
    TweenLite.to(preloader,     3, {x:"855px"} )
  }