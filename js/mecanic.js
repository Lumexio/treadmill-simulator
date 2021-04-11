function insertSpeed() {
     let dataSpeed = document.querySelector(".path-run");/*para accesar la clase en el css y sus propiedades*/
     let input;/*Aqui se inyecta el valor desde el input container*/
     input = document.getElementById('input').value;
     if (input >= 0 && input <= 20) {
          output = input;//guarda la entrada de datos para mostrarla en una una etiqueta posteriormente
          input = (500 / input);//velocidad = distancia/tiempo
          input = input + "s";//unir un string con numero contenido en una variable.
          console.log(input);
          document.getElementById('output').innerHTML = output;
          dataSpeed.style.animation = "rotate " + input + " linear reverse infinite"
     } else {
          alert("Entrada incorrecta, debes ingresar una velocidad entre 1 y 20 km/hr. Intentalo de nuevo porfavor.");
     }




}
