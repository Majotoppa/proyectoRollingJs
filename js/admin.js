//Agrego los import
import{campoRequerido, validarNumeros, validarURL, validarGeneral} from "./validaciones.js";

import {Producto} from "./productoClass.js"; 

//TRAIGO los <input> del formulario "Administrar Productos"

let campoCodigo = document.querySelector("#codigoID");
let campoProducto = document.querySelector("#producto");
let campoDescripcion = document.querySelector("#descripcion");
let campoCantidad = document.querySelector("#cantidad")
let campoURL = document.querySelector("#url")

//TRAER EL <form> completo
let formularioProducto = document.querySelector("#formProducto")

//ASOCIAR LA FUNCIÓN CAMPO REQUERIDO AL EVENTO BLUR
campoCodigo.addEventListener("blur", () =>{campoRequerido (campoCodigo)});
//campoCodigo.addEventListener("load", generarNumerosAleatorios(0,9));
campoProducto.addEventListener("blur", () =>{campoRequerido (campoProducto)});

campoDescripcion.addEventListener("blur", () =>{campoRequerido (campoDescripcion)});

campoCantidad.addEventListener("blur", () =>{validarNumeros (campoCantidad)});

campoURL.addEventListener("blur", () =>{validarURL (campoURL)});


//Asociar la función que guarda un producto al evento Submit
formularioProducto.addEventListener("submit",guardarProducto);

//FUNCIÓN QUE GENERA NÚMEROS ALEATORIOS
//PARA HACER CÓDIGOS ÚNICOS

function generarNumerosAleatorios(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
  }

  for (let i = 1; i <= 1; ++i){
      console.log(generarNumerosAleatorios(0,999));
  }

 campoCodigo.value = generarNumerosAleatorios(0,999)


  //Función que guarda los productos

  function guardarProducto(e){
    //validar los campos del formulario
    // si los datos están bien
    //ahí recién quiero agregar o crear un producto
    e.preventDefault();

    if(validarGeneral(campoCodigo, campoProducto, campoDescripcion,campoCantidad, campoURL)){
        //if( productoExistente == false){
             //caso 1: Presiono guardar y SE CREA un producto  //agregar o crear producto
        //llamo la función crear producto
             
        crearProducto();

        //}else{
            
        //caso 2:
        //modificarProducto();
        //}


        
      }
  }


//FUNCION PARA CREAR PRODUCTOS
  function crearProducto(){
    console.log("aquí creo el producto");
    //creo variable llamada "productoNuevo" que contiene el Objeto producto, luego lo muestro por consola
    let productoNuevo = new Producto(campoCodigo.value, campoProducto.value, campoDescripcion.value, 
    campoCantidad.value, campoURL.value);
        
    console.log(productoNuevo);

  }
  