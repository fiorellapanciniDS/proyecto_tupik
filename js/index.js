
function obtenerImagen(idImagen) {
   return IMAGENES.find((imagen) => imagen.id == idImagen);
}

let formularioBusqueda = document.getElementById("formularioBusqueda");
formularioBusqueda.addEventListener("submit", buscarImagenes);

(function() {
    let listaImagenesDiv = document.getElementById("listaImagenes");

    IMAGENES.forEach(function (imagen) {
           let vistaImagenes = document.createElement("li");
           // Insertar HTML interno
           vistaImagenes.innerHTML =
           `<li><img src="assets/imagen${imagen.id}.jpg" class= "imagenes" alt="paisaje"></img></li>`;
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

   let aBuscar = document.getElementById("busquedaInput").value.toLowerCase();
   let listaImagenesDiv = document.getElementById("listaImagenes");

   IMAGENES.forEach(function (imagen) {
      if (imagen.categoria == aBuscar) {
         let imagenLi = document.createElement("li");
         // Insertar HTML interno
         imagenLi.innerHTML =
         `<li><img src="assets/imagen${imagen.id}.jpg" class= "imagenes" alt="paisaje"></img></li>`;
         listaImagenesDiv.appendChild(imagenLi);
      }
   });

   localStorage.setItem('ultimaBusqueda', aBuscar);

} 