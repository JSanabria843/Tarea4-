function verificarrespuesta() {
    const respuesta = document.getElementById('botonrespuesta').value;
    const resultado = document.getElementById('resultado');
    if (respuesta === "Brendan Eich") {
      console.log("¡Correcto!");
      resultado.textContent = "¡Correcto!";
      resultado.style.color = "green";
    } else {
      console.log("¿No lo sabes? ¡Brendan Eich!");
      resultado.textContent = "¿No lo sabes? ¡Brendan Eich!";
      resultado.style.color = "red";
    }
  }