
<<<<<<< HEAD
let input;

let output = [];
/*let suma = (input) => {
    input = document.getElementById('input').value;
    output = input;
    document.getElementById('output').innerHTML = output;
    return output;
}*/

function splitToDigit(n) {
     return [...n + ''].map(Number)
}
/*function splitToDigit(n){
  return (n + '').split('').map((i) => { return Number(i); })
} */
let atall = (input) => {
=======
/*let input;
let output;
var suma = () => {
>>>>>>> master
     input = document.getElementById('input').value;
     input = splitToDigit(input);
     input = input.sort((a, b) => b - a);
     console.log(input);
     output = input;
     document.getElementById('output').innerHTML = output;
     return output;
}
<<<<<<< HEAD
=======
suma();*/
>>>>>>> master
