//FUNCIÓN PARA VALIDAR LOS <input> del código, del producto y de la descripción

export function campoRequerido(input){
    //console.log("desde la funcion campo requerido")
    //console.log(input)
    if(input.value.trim().length > 0){
        //console.log("pasó la validación")
        input.className = "form-control is-valid";
        return true;
    }else{
        
        input.className = "form-control is-invalid";
        return false;
    }
}

//Función para validar el <input> Cantidad

export function validarNumeros(input){
    //1.- crea una EXPRESIÓN REGULAR
    
    let patron = /[^A-Za-z0-9_]/;
    //probar que la Expresión regular funcione
    if(patron.test(input.value)){
        //si cumple la expresión regular
        input.className = "form-control is-valid";
        return true;
    }else{
    //si NO SE CUMPLE la expresión regular
    input.className = "form-control is-invalid";
    return false;
    }
    
    
    }

//Función para validar el <input> de la URL
export function validarURL(input){
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

    if(patron.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
    //si NO SE CUMPLE la expresión regular
    input.className = "form-control is-invalid";
    return false;
    }
}

//Función para validar TODO el formulario

export function validarGeneral(campoCodigo, campoProducto, campoDescripcion, campoCantidad, campoURL){
    
    
    //TRAIGO el alert DESDE EL HTML

    let alerta = document.querySelector("#msjAlerta");

    //PREGUNTAR SI TODOS LOS CAMPOS SON CORRECTOS 
    //Y QUE ME RETORNEN UN VALOR BOOLEANO

    if (campoRequerido(campoCodigo) && 
    campoRequerido(campoProducto)&&
    campoRequerido(campoDescripcion) &&
    validarNumeros(campoCantidad)&&
    validarURL(campoURL)){
        //console.log("sí pasó la validación");
        alerta.className = "alert alert-danger my-3 d-none text-center lead";
        return true;
    }else{
        //console.log("no pasó la validación");
        
        alerta.className = "alert alert-danger my-3 text-center lead"; 
        return false;
    }

}