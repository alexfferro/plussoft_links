function copy(id) {
    const texto = document.getElementById(`${id}`).innerText;
    navigator.clipboard.writeText(texto)
    checked(id)
  }
  
  function checked(id) {
    var check = document.getElementById(`${id}`)
    check.className = 'check';
  
    setTimeout(function() {
      check.classList.remove('check');
    }, 2000)
  }
  
  function saveNote(){
    const content = document.getElementById('notepad').value;
    localStorage.setItem('note', content);
  }
  
  window.onload = function(){
    const savedNote = localStorage.getItem('note');
    if (savedNote){
      document.getElementById('notepad').value = savedNote;
    }
  };
  
  document.getElementById('save-btn').addEventListener('click', saveNote);
  