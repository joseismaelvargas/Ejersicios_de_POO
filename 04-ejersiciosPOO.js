// Crea un objeto producto con propiedades nombre, precio y categoría. Luego, escribe una función que reciba un array de productos y devuelva un objeto donde las claves sean las categorías y los valores sean arrays de productos de esa categoría. Usa reduce para realizar la agrupación. Usa prompt para ingresar los datos de los productos.
const productos = [
    {
        nombre: "Smartphone",
        precio: 599,
        categoria: "Electronica"
    },
    {
        nombre: "Laptop",
        precio: 999,
        categoria: "Electronica"
    },
    {
        nombre: "PC Gamer",
        precio: 79,
        categoria: "Electronica"
    },
    {
        nombre: "Bicicleta",
        precio: 299,
        categoria: "Deportes"
    },
    {
        nombre: "Libro",
        precio: 19,
        categoria: "Literatura"
    }
];
function categoria(categoria){
    let categorias=productos.reduce((acc,indice)=>{
        if(!acc[indice.categoria]){
            acc[indice.categoria]=[]
        }
           acc[indice.categoria].push(indice.nombre)
           acc[indice.categoria].push(indice.precio) 
      
        return acc
    },[])
    console.log(categorias)

}
categoria()