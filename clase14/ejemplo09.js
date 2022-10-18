function validarLargo(texto, largorequerido){
    return texto.length >= largorequerido;
}

function validarForm(){
    const nombreValido = true;
    const passWordValido = validarLargo(document.form1.text1.value, 5);
}

const resultado = nombreValido && passWordValido;

if (resultado) {
    alert('Es valido');
} else{
    alert('NO ES VALIDO');
}