
 function animate(id) {
  var node = document.getElementById(id).childNodes[0];
  var text = node.data;
  setInterval(function () {
   text = text.substring(1) + text[0];
   node.data = text;
  }, 1000); //интервал прокрутки, мс
 }

 window.addEventListener('load', function (e) { animate('marqueeline_1'); }, false);
