const albumEl = document.querySelector(".album");

albumEl.addEventListener("click", function (event) {
  const element = event.target;
  console.log(element)
  if (element.matches("btn")) {
    if (element.dataset === "♡") {
      element.setAttribute( "style","display:none");
    }
  }
});
