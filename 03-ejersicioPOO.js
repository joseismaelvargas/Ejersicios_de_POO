// Ejercicio 3:
// Crea un objeto libro que tenga propiedades título, autor, año y género. Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. Usa prompt para ingresar los datos de los libros y el género.
           

// function IngresarDatos(){
//     class Libro{
//         constructor(titulo,autor,año,genero){
//             this.autor=autor
//             this.titulo=titulo
//             this.año=año
//             this.genero=genero
//         }
       
//     }
//     let autor=prompt("Ingresa el nombre del Autor del libro")
//     let titulo=prompt("Ingresa elTitulo del libro")
//     let año=prompt("año del libro")
//     let genero=prompt("Genero del libor")
//     const libro=new Libro(autor,titulo,año,genero)
//     console.log(libro)

// }
// IngresarDatos()
const libros = [
    {
        genero: "Ficcion",
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        año: 1967
    },
    {
        genero: "Ficcion",
        titulo: "Dune",
        autor: "Frank Herbert",
        año: 1965
    },
    {
        genero: "Misterio",
        titulo: "El Nombre de la Rosa",
        autor: "Umberto Eco",
        año: 1980
    },
    {
        genero: "Fantasía",
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        año: 1937
    },
    {
        genero: "Ficcion",
        titulo: "Sapiens: De animales a dioses",
        autor: "Yuval Noah Harari",
        año: 2011
    }
];

function genero(){
    let genero=prompt("Escribe el genero del libro")
    let buscar=libros.filter((el)=>el.genero===genero)
    console.log(buscar)

}
genero()
