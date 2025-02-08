document.body.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

const right = document.getElementsByClassName("right-context")[0];
const right_child = right.children;
window.addEventListener("mousedown", (e) => {
  if (e.button == 2) {
    right.style.display = "flex";
    right.style.top = e.pageY + "px";
    right.style.left = e.pageX + "px";
  } else {
    setTimeout(() => {
      right.style.display = "none";
    }, 1000);
  }

});

right_child[0].addEventListener("click", () => {
  document.getElementsByClassName("bookmark")[0].style.display = "block";
});
right_child[2].addEventListener("click", () => {
  fetchwallpaper();
});
right_child[4].addEventListener("click", () => {
  console.log("Loading a quote")
  quote();
});
right_child[6].addEventListener("click", () => {
  search_bar.focus();
});
right_child[8].addEventListener("click", () => {
  todo_container.style.bottom = "30px";
});
right_child[10].addEventListener("click", () => {
  setting_screen.style.bottom = "30px";
  setting_screen.style.left = "10px";
  setTimeout(() => {
    setting_cut.style.display = "block";
  }, 1000);
});
