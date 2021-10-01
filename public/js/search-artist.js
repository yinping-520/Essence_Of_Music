function newFormHandler(event) {
  
  
    const artist = document.querySelector('#artist').value;
    
    fetch(`http://localhost:3001/artist/name/${artist}`)
    .then(response => response)
    } 
  
  
  document.querySelector('#form').addEventListener('submit', newFormHandler);
    