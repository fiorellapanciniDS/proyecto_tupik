class Imagen {
    constructor(id, nombre, categoria, precio, tamaño) {
       (this.id = id), (this.nombre = nombre);
       this.categoria = categoria;
       this.precio = precio;
       this.tamaño = tamaño;
    }
}
 const IMAGENES = [
    {
        id: 1,
        nombre: 'Montañas',
        categoria: 'Paisajes',
        precio: 150,
        tamaño: '376 x 249',
    },
    {
        id: 2,
        nombre: 'Atardecer',
        categoria: 'Playas',
        precio: 120,
        tamaño: '376 x 249',
    },
    {
        id: 3,
        nombre: 'Puente',
        categoria: 'Playas',
        precio: 150,
        tamaño: '376 x 249',
    },
    {
        id: 4,
        nombre: 'Lago',
        categoria: 'Paisajes',
        precio: 120,
        tamaño: '376 x 249',
    },
    {
        id: 5,
        nombre: 'Nieve',
        categoria: 'Paisajes',
        precio: 120,
        tamaño: '376 x 249',
    },
    {
        id: 6,
        nombre: 'Noche',
        categoria: 'Paisajes',
        precio: 150,
        tamaño: '376 x 249',
    }
]
