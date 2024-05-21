function solicitarUsuario() {
     
    const usuario = prompt("Por favor, ingrese su nombre de usuario:");
  
    
    if (usuario === "Admin") {
     
      const contrasena = prompt("Por favor, ingrese su contraseña:");
  
     
      if (contrasena === "Jedi") {
        alert("¡Que la fuerza te acompañe!");
      } else if (contrasena === "" || contrasena === null) {
        alert("Cancelado");
      } else {
        alert("Contrasena incorrecta");
      }
    } else if (usuario === "" || usuario === null) {
      alert("Cancelado");
    } else {
      alert("No te conozco");
    }
  }
  

  solicitarUsuario();
