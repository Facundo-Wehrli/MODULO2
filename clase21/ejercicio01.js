// pide la edad y si es mayor de 18 años indica si puede conducir

// resuelto por mi en 15 minutos
// function MayorioEdad(edad) {
//     if (edad >= 18) {
//         console.log('puede conducir, ya es mayor de edad');
//     } else console.log('no puede conducir, aún es menor de edad');
// }
// console.log(MayorioEdad(19));

//resuelto por la profe
const edad = parseInt(prompt('Ingrese su edad', ''));

if (Number.isNaN(edad)) {
    document.write('debes ingresar un número')
} else if (edad >= 18) {
    document.write('eres mayor, puedes conducir')
} else {
    document.write('eres menor, no puedes conducir')
}


// ejemplo con función
// function conducir() {
//     if(Number.isNaN(edad)){
//             document.write('La edad ingresada no es válida') 
//         }else if (edad >= 18) {
//             document.write(`Hola ${nombre}, tienes edad suficiente para conducir.`)
//         } else {
//             document.write(`Hola ${nombre}, no tienes edad suficiente para conducir.`)
//         }
//     }
    
//     conducir();
    