// Ejercicio 1:
// Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings). Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.
const persona={
    nombre:"juan",
    edad:23,
    hobbye:["pintar Cuadros","Cantar","leer"]

}
function nuevoshooby(){
     let nuevo;
    do{ 
        let  nuevo= prompt("Escribe su nuevo hobbye")
    
          persona.hobbye.push(nuevo)  
        
        
     
       

    }while(nuevo)
  
for(let imprime in persona){
    document.write(`<li>${persona[imprime]}</li>`)
}

}
nuevoshooby()

console.log(persona)