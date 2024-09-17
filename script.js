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
  function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.display = "none";
    }, 500); // 1000ms = 1 segundo
}
var buttons = document.querySelectorAll(".open-modal-btn");
buttons.forEach(function(button) {
    button.onclick = function() {
        showModal();
    };
});