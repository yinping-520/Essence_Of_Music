async function newFormHandler(event) {
    event.preventDefault();
    const artist = document.querySelector('#').value;
    
    const response = await fetch(`/artist`)
    if (response.ok) {
      response
    } 
  }
  
  document.querySelector('').addEventListener('submit', newFormHandler);
    