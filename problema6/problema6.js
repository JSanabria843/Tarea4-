function encontrarMinMax() {
    let numElementos = parseInt(prompt("¿Cuántos números quiere ingresar a la lista?"));

    let numeros = [];

    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < numElementos; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);

        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    alert("El número más pequeño es: " + min);
    alert("El número más grande es: " + max);
}
