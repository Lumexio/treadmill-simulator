function insertSpeed() {
     const dataSpeed = document.querySelector(".path-run");

     let input;
     input = document.getElementById('input').value;
     if (input >= 0 && input <= 20) {
          output = input;//guarda la entrada de datos para mostrarla en una una etiqueta posteriormente
          input = (500 / input);//
          input = input + "s";//unir un string con numero contenido en una variable.
          console.log(output);
          document.getElementById('output').innerHTML = output;
          dataSpeed.style.animation = "rotate " + input + " linear reverse infinite"
     } else {
          alert("Entra incorrecta, debes ingresar una velocidad entre 1 y 20 km/hr. Intentalo de nuevo porfavor.");
     }




}
