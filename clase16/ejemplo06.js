const alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('activo')
  })

  //classList --> represente una lista de clases asignadas al elemento
  //toogle-->
  //add --->agrega una clase
  //remove --> remueve una vlase
