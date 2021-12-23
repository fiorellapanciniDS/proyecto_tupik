const precio = 150
function multiplicar (cantidadImagenes, precio){
    return cantidadImagenes * precio
}
function confirmacion (nombreCliente, resultado, telefono){
    alert("Gracias " + nombreCliente + "!" + " El monto que debes abonar es " + resultado + " pesos.\n" + "Recibiras un mensaje al telefono " + telefono + " para continuar con el pago.");  
}


let nombreCliente = prompt("Ingrese su nombre")
let telefono = prompt("Ingrese su telefono para el pago")
let cantidadImagenes = parseInt(prompt("Cuantas imagenes quiere comprar?"));
let resultado =  multiplicar (cantidadImagenes, precio);

confirmacion(nombreCliente, resultado, telefono);


console.log (nombreCliente + " debe " + resultado + " pesos. " + "Llamar al " + telefono);