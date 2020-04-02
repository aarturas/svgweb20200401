var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

// ---------------------------------------------------------
//                   Paslėpsime menu:
// ---------------------------------------------------------

menu.addEventListener('click', function(e) {
  // alert('I have been click');
  nav.classList.toggle('hide-mobile');
  // (e) - reiškia "paste" / prevent- kad, "nesiblaškytu?"
  e.preventDefault();
});
// ---------------------------------------------------------
//             Padarysime, kad rodytų menu vėl:
// ---------------------------------------------------------

exit.addEventListener('click', function(e) {
  // alert('I have been click');
  nav.classList.add('hide-mobile');
  // (e) - reiškia "paste" / prevent- kad, "nesiblaškytu?"
  e.preventDefault();
});
// ---------------------------------------------------------
// ---------------------------------------------------------
