const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function (e) {
    e.preventDefault()

    if (e.currentTarget.nombre.value == '') {
        alert('el campo nombre es requerido')
        return
    }
    if (e.currentTarget.mensaje.value == '') {
        alert('el campo mensaje es requerido')
        return
    }
    alert(`Gracias ${e.currentTarget.nombre.value} gracias por enviarnos el siguiente mensaje. ${e.currentTarget.mensaje.value}.`)
})