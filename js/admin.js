

//FUNCIÓN QUE GENERA NÚMEROS ALEATORIOS
//PARA HACER CÓDIGOS ÚNICOS

function generarNumerosAleatorios(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
  }

  for (let i = 1; i <= 1; ++i){
      console.log(generarNumerosAleatorios(0,999));
  }