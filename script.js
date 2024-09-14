function copyPhone(id) {
    const input = document.getElementById(`${id}`);
    const legend = input.parentNode.innerText
    navigator.clipboard.writeText(`${legend} - ${input.value}`)
  }
  function copyLinks(id) {
    const input = document.getElementById(`${id}`).value
    navigator.clipboard.writeText(input)
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
    modal.style.display = "block"; // Mostra o modal
    // Fecha o modal automaticamente após 1 segundo
    setTimeout(function() {
        modal.style.display = "none";
    }, 500); // 1000ms = 1 segundo
}
// Adiciona o evento de clique a todos os botões que possuem a classe 'open-modal-btn'
var buttons = document.querySelectorAll(".open-modal-btn");
buttons.forEach(function(button) {
    button.onclick = function() {
        showModal();  // Chama a função showModal
    };
});