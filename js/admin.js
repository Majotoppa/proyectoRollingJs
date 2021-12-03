

//TRAIGO los <input>

let campoCodigo = document.querySelector("#codigoID");
console.log(campoCodigo)
let campoProducto = document.querySelector("#producto");

let campoDescripcion = document.querySelector("#descripcion");
let campoCantidad = document.querySelector("#cantidad")
let campoURL = document.querySelector("#url")

//FUNCIÓN QUE GENERA NÚMEROS ALEATORIOS
//PARA HACER CÓDIGOS ÚNICOS

function generarNumerosAleatorios(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
  }

  for (let i = 1; i <= 1; ++i){
      console.log(generarNumerosAleatorios(0,999));
  }