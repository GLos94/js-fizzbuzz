// var lista;
// var listaPrima;
//
//
// for (var i = 1; i <= 100; i++) {
//   lista = i;
//
//   if (i%3 == 0 && i%5 == 0) {
//     lista = i;
//     listaPrima = document.getElementById('lista').innerHTML;
//     document.getElementById("lista").innerHTML= listaPrima + "<li>" + "FizzBuzz" + "</li>" ;
//   } else if (i%5 == 0) {
//     lista = i;
//     listaPrima = document.getElementById('lista').innerHTML;
//     document.getElementById("lista").innerHTML= listaPrima + "<li>" + "Buzz" + "</li>" ;
//   } else if (i%3 == 0) {
//     lista = i;
//     listaPrima = document.getElementById('lista').innerHTML;
//     document.getElementById("lista").innerHTML= listaPrima + "<li>" + "Fizz" + "</li>" ;
//   } else {
//     lista = i;
//     listaPrima = document.getElementById('lista').innerHTML;
//     document.getElementById("lista").innerHTML= listaPrima + "<li>" + lista + "</li>" ;
//   }
//
// }

var lista = document.getElementById('lista');

for (var i = 1;i <= 100; i++) {
   if (i%3 == 0 && i%5 == 0) {
     lista.innerHTML += "<li>FizzBuzz</li>";
   } else if (i%3 == 0) {
     lista.innerHTML += "<li>Fizz</li>";
   } else if (i%5 == 0) {
     lista.innerHTML += "<li>Buzz</li>";
   } else {
     lista.innerHTML += "<li>" + i + "</li>";
   }
 }
