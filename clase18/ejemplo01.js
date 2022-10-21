const datosUsuarios = [{
    nombre: 'Flavia', password: 'abc12344'
},
{
    nombre: 'Laura', password: 'vewarfafae'
},
{
    nombre: 'Pablo', password: 'aksejfhkas'
},
{
    nombre: 'Lorena', password: 'fseafeas'
},
{
    nombre: 'Virginia', password: 'kaljsfjas'
}

]

const soloPassword = datosUsuarios.map(function(a){
    return a.password
})

console.log(soloPassword)
