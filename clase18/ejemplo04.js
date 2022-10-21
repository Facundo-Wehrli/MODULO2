function getNombreDiasForMes(mes) {
    if (Number.isNaN(mes)) return false // que tiene que ser numérico

    if (mes < 1 || mes > 12) return false// mes tiene que estar comprendido entre 1 y 12

    mes-- //10 -> 9 asi octubre sería el elemento 9 xq los arrays arranca del elemento 0

    const data = [
        {
            nombre: 'Enero',
            dias: 31
        },
        {
            nombre: 'Febrero',
            dias: 28
        },
        {
            nombre: 'Marzo',
            dias: 31
        },
        {
            nombre: 'Abril',
            dias: 30
        },
        {
            nombre: 'Mayo',
            dias: 31
        },
        {
            nombre: 'Junio',
            dias: 30
        },
        {
            nombre: 'Julio',
            dias: 31
        },
        {
            nombre: 'Agosto',
            dias: 30
        },
        {
            nombre: 'Septiembre',
            dias: 31
        },
        {
            nombre: 'octubre',
            dias: 30
        },
        {
            nombre: 'Noviembre',
            dias: 30
        },
        {
            nombre: 'Diciembre',
            dias: 31
        }
    ]
    return data[mes]
}

const numMes = parseInt(prompt('ingrese el mes', ''))
const resultado = getNombreDiasForMes(numMes)

if (resultado) {
    alert(`${resultado.nombre} tiene ${resultado.dias}`)
}
else {
    alert('mes invalido')
}