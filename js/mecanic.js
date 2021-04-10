function insertSpeed() {
     const dataSpeed = document.querySelector(".path-run");

     let input;
     input = document.getElementById('input').value;
     input = input + "s";//unir un string con numero contenido en una variable.
     output = input;//guarda la entrada de datos para mostrarla en una una etiqueta posteriormente
     document.getElementById('output').innerHTML = output;
     dataSpeed.style.animation = "rotate " + input + " linear reverse infinite"

}
