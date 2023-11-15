document.querySelectorAll('.duvida').forEach(function(duvida){
   duvida.addEventListener('click', ()=>{
      duvida.classList.toggle('ativa')
   })
})