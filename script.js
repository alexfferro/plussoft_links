function copy(id) {
    const texto = document.getElementById(`${id}`).value;
    navigator.clipboard.writeText(texto)
  }
  
  function saveNote(){
    const content = document.getElementById('notepad').value;
    localStorage.setItem('note', content);
  }
  
  // window.onload = function(){
  //   const savedNote = localStorage.getItem('note');
  //   if (savedNote){
  //     document.getElementById('notepad').value = savedNote;
  //   }
  // };
  
  // document.getElementById('save-btn').addEventListener('click', saveNote)

  function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";  // Exibe o modal

    // Fecha o modal quando clicar no "x"
    var closeModal = document.getElementsByClassName("close")[0];
    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    // Fecha o modal se clicar fora da área do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// Adiciona o evento de clique a todos os botões que possuem a classe 'open-modal-btn'
var buttons = document.querySelectorAll(".open-modal-btn");
buttons.forEach(function(button) {
    button.onclick = function() {
        showModal();  // Chama a função showModal
    };
});