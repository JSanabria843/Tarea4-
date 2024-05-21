function calcularFactura() {
 
    let precio1 = parseFloat(prompt("Ingrese el precio del primer plato:"));
    let precio2 = parseFloat(prompt("Ingrese el precio del segundo plato:"));
    let precio3 = parseFloat(prompt("Ingrese el precio del tercer plato:"));


    let impuesto = parseFloat(prompt("Ingrese el porcentaje de impuesto:"));


    let subtotal = precio1 + precio2 + precio3;

    let totalImpuestos = subtotal * (impuesto / 100);

    let totalFactura = subtotal + totalImpuestos;


    alert("El monto total de la factura es: $" + totalFactura.toFixed(2));
}
