let search_button = document.getElementById("search-button");
let search_bar = document.getElementById("search-bar");
let inputContainer = document.getElementsByClassName("input-container")[0];
search_bar.addEventListener("focus",()=>{
  inputContainer.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
})
search_bar.addEventListener("focusout",()=>{
  inputContainer.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
})

search_button.addEventListener("click", () => {
  let text = search_bar.value;
  if ("".trim().length < 2) {
    send_notification(
      "Empty",
      "Please write something before performing a search, i.e length > 2",
      "Okay!",
      function () {
        notification.style.left = "-22vw";
      }
    );
  } else {
    window.open("https://www.google.com/search?q=" + text, "_self");
  }
});

search_bar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    let text = search_bar.value;
    if (text.trim().length < 2) {
      send_notification(
        "Empty",
        "Please write something before performing a search, i.e length > 2",
        "Okay!",
        function () {
          notification.style.left = "-22vw";
        }
      );
    } else {
      window.open("https://www.google.com/search?q=" + text, "_self");
    }
  }
});
