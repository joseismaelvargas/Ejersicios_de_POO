// Ejercicio 5:
// Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Usa un bucle para calcular la calificación más alta del alumno y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).
const alumnos = [
    {
        nombre: "Ana Pérez",
        curso: "Matemáticas Avanzadas",
        calificaciones: [5, 3, 4]
    },
    {
        nombre: "Carlos López",
        curso: "Física",
        calificaciones: [5, 7, 6]
    },
    {
        nombre: "María García",
        curso: "Química",
        calificaciones: [9, 9, 9]
    },
    {
        nombre: "Luis Torres",
        curso: "Biología",
        calificaciones: [8, 7, 8]
    },
    {
        nombre: "Elena Ruiz",
        curso: "Historia",
        calificaciones: [6, 7, 7]
    },
    {
        nombre: "Miguel Fernández",
        curso: "Literatura",
        calificaciones: [7, 8, 8]
    },
    {
        nombre: "Lucía Ramírez",
        curso: "Arte",
        calificaciones: [9, 8, 10]
    },
    {
        nombre: "Jorge Martín",
        curso: "Geografía",
        calificaciones: [6, 6, 7]
    },
    {
        nombre: "Sofía González",
        curso: "Informática",
        calificaciones: [10, 9, 10]
    },
    {
        nombre: "Diego Sánchez",
        curso: "Filosofía",
        calificaciones: [7, 6, 8]
    }
];

console.log(alumnos);

   for(let i=0;i<alumnos.length;i++){
   
    let Promedio=alumnos[i].calificaciones.reduce((acc,iten)=>acc+iten,0)/ alumnos[i].calificaciones.length;
    alumnos[i].Promedio=Promedio
    }  

     console.log(alumnos[0].Promedio)

const calificaciones=()=>{
    for(let i=0;i<alumnos.length;i++){
        if(alumnos[i].Promedio<=10&alumnos[i].Promedio>=9){
            alumnos[i].calificacion="A"
        }else if(alumnos[i].Promedio<=8&alumnos[i].Promedio>=7){
            alumnos[i].calificacion="B"
        }else if(alumnos[i].Promedio<=6&alumnos[i].Promedio>=5){
            alumnos[i].calificacion="C"
        }else if(alumnos[i].Promedio<=4&alumnos[i].Promedio>=1){
            alumnos[i].calificacion="D"
        }
    }

} 
calificaciones()
   console.log(alumnos)
   
    