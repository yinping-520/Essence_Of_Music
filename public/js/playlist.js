
const albumEl = document.querySelector(".album");

albumEl.addEventListener("click", function (event) {
  const element = event.target;
  if (element.textContent === "♡") {
    element.textContent = "❤"
    const artist_id = element.getAttribute('data-id');
    const youtube = element.getAttribute('data-content');
    console.log(youtube)
    fetch('/api/favorites', {
      method: 'POST',
      body: JSON.stringify({ artist_id, youtube }),
      headers: { 'Content-Type': 'application/json' },
  }).then(response=>{response.json()})
  .then(data => {console.log(data)})
  
  }else if(element.textContent === "❤") {
    element.textContent = "♡"
   
  }
});
