class Imagen {
    constructor(nombre, categoria, precio, tamaño) {
        this.nombre = nombre;
        this.categoria   = categoria;
        this.precio  = precio;
        this.tamaño  = tamaño;
    }

    confirmarCompra(){
        alert(`Gracias por su compra de la imagen ${this.nombre} de la categoria ${this.categoria}.
El costo total es de ${this.precio} pesos.`)
    }
};

const IMAGEN1 = new Imagen ("Montañas", "Paisajes", 150, "376 x 249");
const IMAGEN2 = new Imagen ("Atardecer", "Paisajes", 120, "376 x 249");
const IMAGEN3 = new Imagen ("Puente", "Paisajes", 150, "376 x 249");
const IMAGEN4 = new Imagen ("Lago",  "Paisajes", 120, "376 x 249");
const IMAGEN5 = new Imagen ("Nieve", "Paisajes", 120, "376 x 249");
const IMAGEN6 = new Imagen ("Noche", "Paisajes", 150, "376 x 249");

function obtenerImagen(numeroImagen) {
    switch (numeroImagen) {
      case "1":
          return IMAGEN1;
      case "2":
          return IMAGEN2;
      case "3":
          return IMAGEN3;
      case "4":
          return IMAGEN4;
      case "5":
          return IMAGEN5;
      case "6":
          return IMAGEN6;    
    }
  }
  
let nombreCliente = prompt("Ingrese su nombre");
let telefono = prompt("Ingrese su telefono para el pago");
let numeroImagen = prompt("Ingrese que imagen quiere comprar: 1, 2, 3, 4, 5 o 6?");
let imagenSelecionada = obtenerImagen(numeroImagen);

imagenSelecionada.confirmarCompra();
{
console.log(`${nombreCliente} compro la imagen  ${numeroImagen}.
Llamar al  ${telefono}`)
}
;