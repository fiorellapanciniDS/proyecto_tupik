class Imagen {
   constructor(numero, nombre, categoria, precio, tamaño) {
      (this.numero = numero), (this.nombre = nombre);
      this.categoria = categoria;
      this.precio = precio;
      this.tamaño = tamaño;
   }

/*    confirmarCompra() {
      alert(`Gracias por su compra de la imagen ${this.nombre} de la categoria ${this.categoria}.
El costo total es de ${this.precio} pesos.`);
   } */
}

const IMAGENES = [
   new Imagen(1, "Montañas", "Paisajes", 150, "376 x 249"),
   new Imagen(2, "Atardecer", "Playas", 120, "376 x 249"),
   new Imagen(3, "Puente", "Paisajes", 150, "376 x 249"),
   new Imagen(4, "Lago", "Paisajes", 120, "376 x 249"),
   new Imagen(5, "Nieve", "Paisajes", 120, "376 x 249"),
   new Imagen(6, "Noche", "Paisajes", 150, "376 x 249"),
];

function obtenerImagen(numeroImagen) {
   return IMAGENES.find((imagen) => imagen.numero == numeroImagen);
}

//IMAGENES.push(new Imagen (7, "Hombre", "Personas", 180, "376 x 249"));

/* let nombreCliente = prompt("Ingrese su nombre");
let telefono = prompt("Ingrese su telefono para el pago");
let numeroImagen = prompt("Ingrese que imagen quiere comprar: 1, 2, 3, 4, 5 o 6?");
let imagenSelecionada = obtenerImagen(numeroImagen);

imagenSelecionada.confirmarCompra();
{
console.log(`${nombreCliente} compro la imagen  ${numeroImagen}.
Llamar al  ${telefono}`)
}; */

let formularioBusqueda = document.getElementById("formularioBusqueda");
formularioBusqueda.addEventListener("submit", buscarImagenes);

(function() {
    let listaImagenesDiv = document.getElementById("listaImagenes");

    IMAGENES.forEach(function (imagen) {
           let vistaImagenes = document.createElement("li");
           // Insertar HTML interno
           vistaImagenes.innerHTML =
           `<li><img src="assets/imagen${imagen.numero}.jpg" class= "imagenes" alt="paisaje"></img></li>`;
           listaImagenesDiv.appendChild(vistaImagenes);
     });
})();

function borrarImagenes() {
   document.getElementById("listaImagenes").innerHTML = "";
}

function buscarImagenes(e) {
   e.preventDefault();
   console.log("Formulario Enviado");

   borrarImagenes();

   let aBuscar = document.getElementById("busquedaInput").value;
   let listaImagenesDiv = document.getElementById("listaImagenes");

   IMAGENES.forEach(function (imagen) {
      if (imagen.categoria == aBuscar) {
         let imagenLi = document.createElement("li");
         // Insertar HTML interno
         imagenLi.innerHTML =
         `<li><img src="assets/imagen${imagen.numero}.jpg" class= "imagenes" alt="paisaje"></img></li>`;
         listaImagenesDiv.appendChild(imagenLi);
      }
   });
}