
let input;
var output;
/*let suma = (input) => {
    input = document.getElementById('input').value;
    output = input;
    document.getElementById('output').innerHTML = output;
    return output;
}*/



let doublee = (nums) => {
     input = document.getElementById('input').value;
     var nums = [input];
     let double = nums.map(function (n) {
          if (n % 2 == 0)
               return n * 2;
          else {
               return n * 3;
          }
     });
     output = double;
     document.getElementById('output').innerHTML = output;
     return output;
}
console.log("pre result:", output);

