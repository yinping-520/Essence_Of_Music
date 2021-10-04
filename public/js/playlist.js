const albumEl = document.querySelector(".album");
albumEl.addEventListener("click", function (event) {
  event.preventDefault()
  const element = event.target;
  if (element.textContent === "♡") {
    element.textContent = "❤"
    const artist_id = element.getAttribute('data-id');
    const youtube = element.getAttribute('data-content');
    const song_name = element.getAttribute('data-name');
    const audio = element.getAttribute('data-audio');
    fetch('/api/favorites', {
      method: 'POST',
      body: JSON.stringify({ artist_id, youtube, song_name, audio }),
      headers: { 'Content-Type': 'application/json' },
  }).then(response=>{response.json()})
  .then(data => {console.log(data)})
  }
});

