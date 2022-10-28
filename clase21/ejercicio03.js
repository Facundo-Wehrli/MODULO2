// Crear un código que reciba como parámetro un array de números y devuelva el mayor
// mi ejercicoi, y está bien
const tamanio = 5
let arreglo = [tamanio];
let mayor = 0;

for ( i = 0; i < tamanio; i++) {
    var x = parseInt(prompt("Ingresa un numero:", ""));
    arreglo[i] = x;
    document.write(+arreglo[i]+ ", ")
}

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i];
    }
}

document.write("el mayor es "+mayor);

