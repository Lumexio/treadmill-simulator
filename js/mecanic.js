
var grades = [];
var bandera=true;
 function suma(){
   while (bandera === true) {
     //let input = prompt("Insertar calificación");
     input = document.getElementById('input').value;
     if (input === "q" || input === null) {
       alert("Gracias por usar sistema.");
       bandera = false;
     }
     grades.push(Number(input));
     console.log(grades);
   }
   alert(grades);
     //document.getElementById('output').innerHTML = grades;
    //input = document.getElementById('input').value;
  }
  suma();
