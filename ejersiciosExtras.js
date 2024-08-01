//? 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:



// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó
// const auto={
//     color:"Rojo",
//     marca:"Ford",
//     modelo:2019,
//     encender:function(){
//     alert("Auto  Encendido")
//     },
//     apagar:function(){
//         alert("Auto Apagado")
//     }

// }
// auto.encender()

// ?2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Rectángulos

// class Cuenta{
//     constructor(saldo=0){
//        this.titular="Alex"
//        this.saldo=saldo


//     }
//     ingresa(cantidad){
//         if(cantidad>this.saldo){
//           this.saldo+=cantidad
//           alert("ingresaste "+this.saldo)
//         }
//     }
//     Extraer(cantidad){
//         if(cantidad<=this.saldo){
//             this.saldo-=cantidad
//             alert("Extraiste "+cantidad)
//         }
//     }
//     informar(){
//         alert("tu saldo es de "+this.saldo)
//     }
// }
// const usuario=new Cuenta()
// usuario.ingresa(100)
// usuario.Extraer(20)
// usuario.informar()

//? 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área


// class Rectangulos{
//     constructor(base,altura){
//         this.base=base
//         this.altura=altura
//     }
    
//     Area(){
//         let resultado=(this.base*this.altura)/2
//         alert("El Area de este Rectangulo es de "+resultado)
//     }
//     Perimetro(){
//         let resultado=this.base+this.altura
//         alert("El perimetro de este rectangulo es de "+resultado)
//     }
// }

// const Rectangulo1=new Rectangulos(5,2)

// Rectangulo1.Area()

//? 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.





// ?5-Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:



// class Persona{
//     constructor(edad,sexo,altura,){
//         this.edad=edad,
//         this.sexo=sexo,
//         this.altura=altura,
//         this.Dni=Math.floor(Math.random()*100000000)

//     }
//     Generacion(nacimiento){
//     if(nacimiento>1940&nacimiento<1948){
//         alert(`Generacion silent Generation Poblacion 6.300.000.000  Circuntacia Historica Conflictos Belicos Rasgo 😐Austeridad`)
    
//     }else if(nacimiento>1949&nacimiento<1968){
//         alert(`Generacion Baybi Boom Poblacion 12.2000.000.000  Circuntacia Historica Paz y explosion Demografica Rasgo 🧐Ambicion`)
             
//     }else if(nacimiento>1968&nacimiento<1980){
//         alert(`Generacion X Poblacion 12.2000.000.000  Circuntacia Historica Crissi del 73 Rasgo🤩 Obsesion por el exito`)
             
//     }else if(nacimiento>1980&nacimiento<1993){
//         alert(`Generacion Y Poblacion 166.2000.000.000  Circuntacia Historica Inicio de la Digitalizacion Rasgo 🤐 Frustacion`)
             
//     }else if(nacimiento>1994&nacimiento<2010){
//         alert(`Generacion Z Poblacion 7.2000.000.000.000  Circuntacia Historica Internet Rasgo 😖 Inrreveerencia`)
             
//     }
//     }
//     MostrarDato(){
//         document.write(`<p> Edad:${this.edad}</p><p>Dni:${this.Dni}</p><p>Sexo :${this.sexo}</p>`)
//     }
// }
// const persona=new Persona(34,"mujer",2)
// persona.MostrarDato()
// ?6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguien

// class Libro {
//     #autor;
//     #isbn;
//     #titulo;
//     #paginas;

//     constructor(titulo, autor, paginas) {
//         this.#isbn = Math.floor(Math.random() * 90000000);
//         this.#titulo = titulo;
//         this.#autor = autor;
//         this.#paginas = paginas;
//     }

//     MostrarLibro() {
//         document.write(`<p>El libro "${this.#titulo}" con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#paginas} páginas.</p>`);
//     }

//     get paginas() {
//         return this.#paginas;
//     }
// }

// const libro = new Libro("Crónicas", "Gabriel García Márquez", 345);
// const libro2 = new Libro("Narnia", "C. S. Lewis", 3500);

// libro.MostrarLibro();
// libro2.MostrarLibro();

// if (libro.paginas > libro2.paginas) {
//     console.log(`El libro "${libro.titulo}" es el de mayor páginas con ${libro.paginas}`);
// } else {
//     console.log(`El libro "${libro2.titulo}" es el de mayor páginas con ${libro2.paginas}`);
// }

//? 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto 
// class Contacto {
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.numero = Math.floor(Math.random() * 10000000);
//     }
// }

// class Agenda {
//     constructor(tamano = 5) {
//         this.contactos = [];
//         this.tamano = tamano;
//     }

//     mostrarContactos() {
//         if (this.contactos.length === 0) {
//             alert("La agenda está vacía.");
//         } else {
//             let lista = this.contactos.map(contacto => `Nombre: ${contacto.nombre}, Número: ${contacto.numero}`).join("\n");
//             alert(lista);
//         }
//     }

//     añadir(contacto) {
//         if (this.agendaLlena()) {
//             alert("La agenda está llena.");
//         } else {
//             this.contactos.push(contacto);
//             alert(`Contacto ${contacto.nombre} añadido.`);
//         }
//     }

//     agendaLlena(){
//         return this.tamano<=this.contactos.length
//     }
//     buscar(nombre) {
//         let encontrado = this.contactos.find(el => el.nombre === nombre);
//         if (encontrado) {
//             alert(`Teléfono de ${nombre}: ${encontrado.numero}`);
//         } else {
//             alert("No encontrado.");
//         }
//         console.log(encontrado);
//     }

//     eliminarContacto(nombre) {
//         const indice = this.contactos.findIndex(contacto => contacto.nombre === nombre);
//         if (indice !== -1) {
//             this.contactos.splice(indice, 1);
//             alert(`Contacto ${nombre} eliminado.`);
//         } else {
//             alert("Contacto no encontrado.");
//         }
//     }
//    huecosLibres(){
//     return this.tamano-this.contactos.length
//    }
// }

// const agenda = new Agenda();

// function mostrarMenu() {
//     let opcion;
//     do {
//         opcion = parseInt(prompt(
//             `Seleccione una opción:
//     1. Añadir contacto
//     2. Existe contacto
//     3. Listar contactos
//     4. Buscar contacto
//     5. Eliminar contacto
//     6. Agenda llena
//     7. Huecos libres
//     8. Salir`
//         ));

//         switch (opcion) {
//             case 1:
//                 let nombreNuevo = prompt("Añada un contacto (nombre):");
//                 let nuevoContacto = new Contacto(nombreNuevo);
//                 agenda.añadir(nuevoContacto);
//                 console.log(nuevoContacto);
//                 break;
//             case 2:
//                 let nombreExiste = prompt("Escribe el nombre del contacto a verificar:");
//                 let existe = agenda.contactos.some(contacto => contacto.nombre === nombreExiste);
//                 alert(`El contacto ${nombreExiste} ${existe ? "existe" : "no existe"} en la agenda.`);
//                 break;
//             case 3:
//                 agenda.mostrarContactos();
//                 break;
//             case 4:
//                 let nombreBuscar = prompt("Escribe el nombre del contacto a buscar:");
//                 agenda.buscar(nombreBuscar);
//                 break;
//             case 5:
//                 let nombreEliminar = prompt("Escribe el nombre del contacto a eliminar:");
//                 agenda.eliminarContacto(nombreEliminar);
//                 break;
//             case 6:
//                 let llena = agenda.agendaLlena();
//                 alert(`La agenda está ${llena ? "llena" : "no está llena"}.`);
//                 break;
//             case 7:
//                 let huecos = agenda.huecosLibres();
//                 alert(`Quedan ${huecos} huecos libres en la agenda.`);
//                 break;
//             case 8:
//                 alert("Saliendo...");
//                 break;
//             default:
//                 alert("Opción no válida.");
//         }
//     } while (opcion !== 8);
// }

// mostrarMenu();


//? 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
// class Persona{
//     constructor(nombre,edad,profesion){
//         this.nombre=nombre,
//         this.edad=edad,
//         this.profesion=profesion
//     }
//     saludar(){
//         alert("Hola "+this.nombre)
//     }
//     despedirse(){
//         alert("Adios "+this.nombre)
//     }
// }
// const persona1= new Persona("ALex",34,"MEcanico")
// const persona2=new Persona("PEPE",45,"Tecnico")
// persona1.saludar()
// persona2.despedirse()

// ?9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

class Animal{
    constructor(nombre,edad,sonido){
        this.nombre=nombre
        this.edad=edad
        this.sonido=sonido
    }
    emitirosnido(){
        alert(this.sonido)
    }
}

class Perro extends Animal{
    constructor(nombre,edad,sonido){
        super(nombre,edad,sonido)
        this.sonidoespecial="..Guao..Guao"
    }
    emitirosnido(){
        alert(this.sonidoespecial)
    }
}
const perro=new Perro("kiko",22,"llll")
perro.emitirosnido()
console.log(perro)
// !Falta el punto 4