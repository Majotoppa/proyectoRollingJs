export class Producto {
    //hacer el método constructor
    constructor(paramCodigo, paramProducto, paramDescripcion, paramCantidad, paramURL){
        //las propiedades de la clase
        this.codigo = paramCodigo;
        this.producto = paramProducto;
        this.descripcion = paramDescripcion;
        this.cantidad = paramCantidad;
        this.url = paramURL;
    }

    //Agregar los get y los set

    //los GET

    get mostrarCodigo(){
        return this.codigo;
    }

    get mostrarProducto(){
        return this.producto;
    }

    get mostrarDescripcion(){
        return this.descripcion;
    }

    get mostrarCantidad(){
        return this.cantidad;
    }

    get mostrarURL(){
        return this.url;
    }

    //Los SET

    set modificarCodigo (nuevoCodigo){
        this.codigo = nuevoCodigo;

    }

    set modificarProducto (nuevoProducto){
        this.producto = nuevoProducto;

    }

    set modificarDescripcion (nuevaDescripcion){
        this.descripcion = nuevaDescripcion;

    }

    set modificarCantidad (nuevaCantidad){
        this.cantidad = nuevaCantidad;

    }

    set modificarURL (nuevaURL){
        this.url = nuevaURL;
    }

    

}
