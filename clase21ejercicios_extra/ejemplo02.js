const texto = document.getElementById('texto');
const contar = document.getElementById('contar');

texto.addEventListener('keyup', function(){
  /* Counting the number of characters in the text box. */
    contar.innerText = texto.value.length;
})