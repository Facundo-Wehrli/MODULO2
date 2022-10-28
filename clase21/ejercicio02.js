// Crear un código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

// 0 a 1000 metros = pie
// 1000 a 10000 metros = bicicleta
// 10000 a 30000 metros = colectivo
// 30000 a 100000 metros = auto
// +100000 = avión


//mi resolución:

const distancia = prompt('ingrese una distancia', '')

if (distancia >= 0 && distancia <= 1000) {
    document.write('a pie')
} else if (distancia > 1000 && distancia <= 10000) {
    document.write('bicicleta')
} else if (distancia > 10000 && distancia <= 30000) {
    document.write('colectivo')
} else if (distancia > 30000 && distancia <= 100000) {
    document.write('auto')
} else if (distancia > 100000) {
    document.write('avion')
}

//la profe :

// const metros = 2500;
// let transportes = '';

// if (metros > 0 && metros <= 1000) {
//     transportes = 'pie'
// } else if (metros > 1000 && metros <= 10000) {
//     transportes = 'bicicleta'
// } else if (metros > 10000 && metros <= 30000) {
//     transportes = 'colecitvo'
// } else if (metros < 30000 && metros <= 100000) {
//     transportes = 'auto'
// } else if (metros > 100000) {
//     transportes = 'avion'
// }

// document.write(`Para ${metros} metros recomendamos ir ${transportes}`)