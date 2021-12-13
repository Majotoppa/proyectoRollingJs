//traer los datos del local storage
//es decir, traer el array [] con los objetos
let grilla = document.querySelector("#grillaPrincipal");

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
listaProductos.forEach((producto)=>{crearCard(producto)});



function crearCard(productoMaquetado){
    

    grilla.innerHTML += ` <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
    <div class="card">
        <img src="${productoMaquetado.url}" class="card-img-top" alt="${productoMaquetado.producto}">
        <div class="card-body">
          <h5 class="card-title">${productoMaquetado.producto}</h5>
          <p class="card-text">${productoMaquetado.descripcion}
          
          </p>
        </div>
      </div>
    </div>
  </div>`  
}

let inputBuscador = document.querySelector("#idBuscador");


let formularioBuscador = document.getElementById("BuscarForm");
formularioBuscador.addEventListener("submit",buscarProducto)


function borrarCards(){
  
        grilla.innerHTML = " ";
        console.log("se activa la función borrar cards")
}



function buscarProducto(e) {
  e.preventDefault();
  console.log("le saco el evento submit por defecto al botón buscar");
  
  borrarCards();

  listaProductos.filter((objetoProducto)=>{if(objetoProducto.codigo == idBuscador.value || objetoProducto.producto == idBuscador.value ){
    crearCard(objetoProducto);
  }})

}

