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

//Creo un ARRAY [] en el que se guardará el objeto producto

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

//Creo una variable booleana 
//si productoExistente = false, es porque quiero CREAR un producto
let productoExistente = false;


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

 campoCodigo.value = generarNumerosAleatorios(0,999);

 //llamar a la función cargarInicial

cargaInicial();


  //Función que guarda los productos

  function guardarProducto(e){
    //validar los campos del formulario
    // si los datos están bien
    //ahí recién quiero agregar o crear un producto
    e.preventDefault();

    if(validarGeneral(campoCodigo, campoProducto, campoDescripcion,campoCantidad, campoURL)){
        if( productoExistente == false){
        //caso 1: Presiono guardar y SE CREA un producto  //agregar o crear producto
        //llamo la función crear producto
             
        crearProducto();

        }else{
            
        //caso 2:
        modificarProducto();
        }


        
      }
  }


//FUNCION PARA CREAR PRODUCTOS
function crearProducto(){
    
    //creo variable llamada "productoNuevo" que contiene el Objeto producto, luego lo muestro por consola
    let productoNuevo = new Producto(campoCodigo.value, campoProducto.value, campoDescripcion.value, 
    campoCantidad.value, campoURL.value);
        
    console.log(productoNuevo);

    //agrego el producto nuevo un array[] 
    listaProductos.push(productoNuevo);
    console.log(listaProductos);

    limpiarFormulario();

    //llamo a la función para guardar el producto en el LocalStorage
    guadarLocalStorage()

    //agrego la estética de la ventana que indica que el producto fue creado
    Swal.fire(
        'Producto Creado',//título
        'Su producto fue creado correctamente',//párrafo descriptivo
        'success'// ícono
      )
     //CREO UNA NUEVA FILA EN LA TABLA

        crearFila(productoNuevo);

  }

//FUNCIÓN PARA LIMPIAR EL FORMULARIO una vez creado el producto
function limpiarFormulario(){
    //uso el método reset para resetear los value
    formularioProducto.reset();
    //limpiar las clases de bootstrap, los is-valid, is invalid
    campoCodigo.className = "form-control"
    campoProducto.className = "form-control"
    campoDescripcion.className = "form-control"
    campoCantidad.className = "form-control"
    campoURL.className = "form-control"

    //limpiar variable booleanda
    productoExistente = false;

}

//FUNCIÓN PARA GUARDAR EL PRODUCTO EL PRODUCTO EN EL LOCALSTORAGE

function guadarLocalStorage(){
    localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos))
}

//FUNCIÓN para que se cree una nueva fila en la tabla, cada vez que se crea un nuevo producto
function crearFila(paramProducto){
    let tabla = document.querySelector("#tablaProductos")
    tabla.innerHTML += `<tr>
    <th>${paramProducto.codigo}</th>
    <td>${paramProducto.producto}</td>
    <td>${paramProducto.descripcion}</td>
    <td>${paramProducto.cantidad}</td>
    <td>${paramProducto.url}</td>
    <td> <button class="btn btn-warning" onclick="prepararEdicionProducto(${paramProducto.codigo})">Editar</button>
     <button class="btn btn-danger" onclick="borrarProducto(${paramProducto.codigo})">Borrar</button> </td>
  </tr>`
}

//creo función que se fije si existen datos en el localStorage
function cargaInicial(){
    //preguntar si hay datos en Local Storage
    //si hay datos---> que se cree la fila
    if(listaProductos.length > 0){
        //dibujar fila
        listaProductos.forEach((itemProducto)=>{crearFila(itemProducto)});
    }
}

//Función que borra las filas
function borrarTabla(){
    let tabla = document.querySelector("#tablaProductos")
    tabla.innerHTML = " "; 
}

//función para EDITAR PRODUCTO


//función para modificar producto
function modificarProducto(){
    console.log("aquí quiero modificar este producto");
    //buscar la posición de mi producto dentro del arreglo
    let posicionDelProducto = listaProductos.findIndex((itemProducto)=>{return itemProducto.codigo == campoCodigo.value});
    console.log(posicionDelProducto)

    //modificar los datos del producto dentro del arreglo
    listaProductos[posicionDelProducto].producto = campoProducto.value;
    listaProductos[posicionDelProducto].descripcion = campoDescripcion.value;
    listaProductos[posicionDelProducto].cantidad = campoCantidad.value;
    listaProductos[posicionDelProducto].url = campoURL.value;
    console.log(listaProductos);  
    //actualizar los datos del Local Storage
    guadarLocalStorage();

    //mostrar un cartel al usuario diciendo que se modificó correctamente
    Swal.fire(
        'Producto Modificado',//título
        'Su producto fue modificado correctamente',//párrafo descriptivo
        'success'// ícono
      )

    //limpiar los datos del formulario
    limpiarFormulario();

    //que se actualice en la tabla
    //1ºborrar todo lo que hay en la tabla
    borrrTabla();

    //2ºvolver a dibujar la fila
    listaProductos.forEach((itemProducto)=>{crearFila(itemProducto)});

}
  