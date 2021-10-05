var savedBtn = document.querySelector("#song");
if (savedBtn) {
    savedBtn.addEventListener("click", function () {
        if (savedBtn.textContent === "❤") {
            savedBtn.textContent = "♡"
            const artist_id = savedBtn.getAttribute('data-id');
            fetch(`/api/favorites/${artist_id}`, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log(response)
                    if (response.ok) {
                        document.location.replace('/playlist');
                    }

                });
        }
    });
}