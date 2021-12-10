//traer los datos del local storage
//es decir, traer el array [] con los objetos

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
listaProductos.forEach((producto)=>{crearCard(producto)})

function crearCard(produdctoMaquetado){
    let grilla = document.querySelector("#grillaPrincipal");

    grilla.innerHTML += ` <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
    <div class="card">
        <img src="${produdctoMaquetado.url}" class="card-img-top" alt="${produdctoMaquetado.producto}">
        <div class="card-body">
          <h5 class="card-title">${produdctoMaquetado.producto}</h5>
          <p class="card-text">${produdctoMaquetado.descripcion}
          ${produdctoMaquetado.cantidad}
          </p>
        </div>
      </div>
    </div>

  </div>`  
}