// scripts.js

// todo: why alert is loading before html content?

document.addEventListener("DOMContentLoaded", function() {

function windowAlert() {

    var a = prompt('Please enter base a:');

    var b = prompt('Please enter base b:');

if (a == '' || b == '') {

  alert('write correct numbers!');

} else {

  var value = (a * a) - (2 * a * b) + (b * b);

  if (value < 0 ) {
      tekst = 'wynik ujemny (' + value + ')';
  } else if (value > 0) {
      tekst = 'wynik dodatni (' + value + ')';
  } else {
      tekst = 'wynik równy zero (' + value + ')';
  }

  	console.log(tekst);

    document.getElementsByTagName('h1')[0].textContent = tekst;
}

}

document.getElementsByTagName('button')[0].addEventListener('click', windowAlert);

});
