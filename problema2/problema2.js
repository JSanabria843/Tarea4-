function ingresarnumero() {
    const ingresousuario = prompt("Por favor, ingrese un número:");
    const numero = parseFloat(ingresousuario);
    
    if (isNaN(numero)) {
      alert("Por favor, ingrese un valor numérico válido.");
    } else {
      if (numero === 0) {
        alert("0");
      } else if (numero > 0) {
        alert("1");
      } else if(numero < 0){
        alert("-1");
      }
    }
  }