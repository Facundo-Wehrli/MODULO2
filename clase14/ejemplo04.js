const valor = parseInt(prompt('Ingrese un valor comprendido entre 1 y 5', ''));

switch (valor) {
    case 1:
        document.write('hola soy el nùmero 1')
        break;
    case 2:
        document.write('hola soy el nùmero 2')
        break;
    case 3:
        document.write('hola soy el nùmero 3')
        break;
    case 4:
        document.write('hola soy el nùmero 4')
        break;
    case 5:
        document.write('hola soy el nùmero 5')
        break;
    case 6:
        document.write('hola soy el nùmero 6')
        break;

    default:
        document.write('debe ingresar un nùmero entre 1 y 5')
        break;
}