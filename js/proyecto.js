class Imagen {
    constructor(numero, nombre, categoria, precio, tamaño) {
        this.numero = numero,
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

const IMAGENES = [new Imagen (1, "Montañas", "Paisajes", 150, "376 x 249"), 
                new Imagen (2, "Atardecer", "Paisajes", 120, "376 x 249"),
                new Imagen (3, "Puente", "Paisajes", 150, "376 x 249"),
                new Imagen (4, "Lago",  "Paisajes", 120, "376 x 249"),
                new Imagen (5, "Nieve", "Paisajes", 120, "376 x 249"),
                new Imagen (6, "Noche", "Paisajes", 150, "376 x 249")
];

function obtenerImagen(numeroImagen) {
    return IMAGENES.find(imagen => imagen.numero == numeroImagen);
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