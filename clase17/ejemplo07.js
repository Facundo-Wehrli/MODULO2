const frutas = ['palta', 'naranjas', 'manzanas', 'anana', 'bananas']

console.log(frutas)
console.log(frutas.sort())

const numeros = [78, 10, 7, 1, 2]

console.log(numeros)
console.log(numeros.sort()) //ordena por el primer número


/* The above code is sorting the array in ascending order. */
const num = numeros.sort(function (a, z) {
    return a - z;
})

console.log(num)


/* The above code is sorting the array in descending order. */
const num2 = numeros.sort(function (a, b) {
    return b - a;
})

console.log(num2)

const palabras = ['flavia', 'pablo', 'abeja', 'perro','animal']


console.log(palabras)

console.log(palabras.sort())

console.log(palabras.sort().reverse())

const palabrs = palabras.sort(function(b,a){
    if (b>a) return -1
    return 0
})

console.log(palabrs)