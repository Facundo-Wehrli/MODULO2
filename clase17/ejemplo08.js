const nombre = 'flavia'
const edad = 41

console.log(`hola ${nombre}, asi que tienes ${edad} años.`)

const edad1 = 18
const edad2 = 32

//operador ternario, interpolaciòn de strings

const mensaje1 = `la cuota para persona de ${edad1} es de ${edad1 >= 21 ? 500 : 300}`
const mensaje2 = `la cuota para personas de ${edad2} es de ${edad2 >= 21 ? 500 : 300}`

console.log(mensaje1)
console.log(mensaje2)