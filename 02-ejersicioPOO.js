
// Ejercicio 2: 
// Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.

// class Estudiantes{
//     constructor(nombre,nota){
//         this.nombre=nombre,
//         this.nota=nota
//     }
// }
// let nombre=prompt("Ingresa nombre del alumno")
// let nota=prompt("nota")
 
// let estudiante1=new Estudiantes(nombre,nota)

// console.log(estudiante1)
const estudiantes = [
    { nombre: "Juan", nota1: 85 },
    { nombre: "María", nota1: 92 },
    { nombre: "Pedro", nota1: 78 },
    { nombre: "Lucía", nota1: 88 },
    { nombre: "Carlos", nota1: 95 }
];

function notamedia(){
    let nota=0
 for(let i=0;i<estudiantes.length;i++){
    document.write(`<h1>${estudiantes[i].nombre}</h1>`)
    document.write(`<li>${estudiantes[i].nota1}</li>`)
    nota+=estudiantes[i].nota1
   
 } 
 document.write(`<h1>Nota media es de ${nota/estudiantes.length}<h1>`)
 console.loga(nota)
}
notamedia()