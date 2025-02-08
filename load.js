document.documentElement.scrollTop = 0;
document.documentElement.scrollLeft = 0;
// console.log(document.documentElement.scrollLeft)

let OPTION_LIST = localStorage.getItem("setting");
let OPTION_LIST_COLOR = localStorage.getItem("setting-color");
if (OPTION_LIST == null) {
  OPTION_LIST = [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  localStorage.setItem("setting", OPTION_LIST.join(","));
  // }
  // if(OPTION_LIST_COLOR == null ){
  OPTION_LIST_COLOR = ["#ffffff", "#ffffff", "#ffffff", "#ffffff"];
  localStorage.setItem("setting-color", OPTION_LIST_COLOR.join(","));
} else {
  OPTION_LIST = OPTION_LIST.split(",");
  OPTION_LIST_COLOR = OPTION_LIST_COLOR.split(",");
}

const set_button = document.getElementsByClassName("set-but");
const set_color = document.getElementsByClassName("set-color");

for (let i in OPTION_LIST_COLOR) {
  set_color[i].setAttribute("value", OPTION_LIST_COLOR[i]);
}
document.getElementById("time").style.color = OPTION_LIST_COLOR[0];
document.getElementById("wish").style.color = OPTION_LIST_COLOR[1];
document.getElementById("quote").style.color = OPTION_LIST_COLOR[2];
// general-> new wallpaper , new quote , border weather
// personalise-> title color,wishcolor, quote color, icons color
// customise - >hide notification,hide todo, hide quote,hide wish,hide temperature,animated weather
// sync - > turn on sync

for (let i in OPTION_LIST) {
  if (OPTION_LIST[i] == "true") {
    set_button[i].setAttribute("checked", "");
  }
}

const notification = document.getElementsByClassName("notification")[0];
function send_notification(title, content, button, action) {
  notification.style.left = "10px";
  let children = notification.children;
  (children[0].textContent = title),
    (children[1].textContent = content),
    (children[2].textContent = button),
    children[2].addEventListener("click", () => {
      action();
    });
  setTimeout(() => {
    notification.style.left = "-22vw";
  }, 5000);
}

async function fetchwallpaper() {
  console.log("hey");
  const url = "https://www.reddit.com/r/wallpaper/hot.json";
  try {
    // Fetching the response from the given URL
    const response = await fetch(url);
    // Checking if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parsing the JSON content from the response
    const data = await response.json();
    //   arrays of data
    const arrData = data["data"]["children"];
    let link =
      arrData[Math.floor(Math.random() * (arrData.length - 0 + 1)) + 0]["data"][
        "url"
      ];
    console.log("inside");
    if (
      link.includes(".png") ||
      link.includes(".jpeg") ||
      link.includes(".jpg") ||
      link.includes(".webp")
    ) {
      console.log("change hoja");
      localStorage.setItem("wallpaper", link);
      let con = document.getElementsByClassName("bg")[0];
      con.innerHTML = "";
      let img = document.createElement("img");
      img.setAttribute("src", link);
      img.setAttribute("id", "bg");
      con.appendChild(img);

      // .setAttribute("src",link);
    } else {
      send_notification(
        "Error in loading image",
        "sorry unable to load the image but you can view the iamge by clicking here",
        "Here!!",
        function () {
          window.open(link, "_blank");
        }
      );
    }
  } catch (error) {
    // Logging any errors that occur during the fetch process
    // console.error('Error fetching JSON:', error);
    send_notification(
      "Error in image",
      "error : " + error,
      "Okay",
      function () {
        notification.style.left = "-22vw";
      }
    );
  }
}
async function quote() {
  try {
    const response = await fetch("https://go-quote.azurewebsites.net/random-quote?format=json");
    const data = await response.json();
    localStorage.setItem("quote", data["text"]);
    document.getElementById("quote").textContent = data["text"];
  } catch(error) {
    send_notification(
      "Error in loading quote",
      "error : " + error,
      "Okay",
      function () {
        notification.style.left = "-22vw";
      }
    );
  }
}
if (OPTION_LIST[0] == "true") {
  fetchwallpaper();
} else {
  let old = localStorage.getItem("wallpaper");
  if (old != null) {
    document.getElementById("bg").setAttribute("src", old);
  }
}
if (OPTION_LIST[1] == "true") {
  quote();
} else {
  let old = localStorage.getItem("quote");
  if (old != null) {
    document.getElementById("quote").textContent = old;
  }
}
if (OPTION_LIST[2] == "false") {
  //    document.getElementsByClassName("left1")[0].style.border = "none";
}
if (OPTION_LIST[3] == "true") {
  document.getElementById("notification").style.display = "none";
}
if (OPTION_LIST[5] == "true") {
  document.getElementById("quote").style.display = "none";
}
if (OPTION_LIST[6] == "true") {
  document.getElementsByClassName("wish")[0].style.display = "none";
}
if (OPTION_LIST[7] == "true") {
  document.getElementsByClassName("weather-card")[0].style.display = "none";
}
if (OPTION_LIST[9] == "true") {
  document.getElementsByClassName("sync-on")[0].style.display = "block";
}



// check for which time to show
// for temporary purpose
let midContainer = document.getElementsByClassName("mid-container")[0];
let clockVal = localStorage.getItem("clock",true);
if(clockVal=="true"){
  document.getElementById("time").style.animation = "fade-out ease-in-out 1s";
  document.getElementById("time").style.display = "inline-block";
}else{
  document.getElementById("clock").style.animation = "fade-out ease-in-out 1s";
  document.getElementById("clock").style.display = "inline-block";
  midContainer.style.top = '25vh';
}

document.getElementById("swapClock").addEventListener("click",()=>{
  swapClock();
});
document.getElementById("swapTheme").addEventListener("click",()=>{
  swapTheme();
});
// localStorage.setItem("clock",true)
function swapClock(){
  if(clockVal){
    localStorage.setItem("clock",false);
    document.getElementById("time").style.animation = "fade-in ease-in-out 1s";
    setTimeout(() => {
      document.getElementById("time").style.display = "none";
      document.getElementById("clock").style.display = "inline-block";
      document.getElementById("clock").style.animation = "fade-out ease-in-out 1s";
      midContainer.style.top = '25vh';
    }, 1000);
  }else{
    localStorage.setItem("clock",true);
    document.getElementById("clock").style.animation = "fade-in ease-in-out 1s";
    midContainer.style.top = '32vh';
    setTimeout(() => {
      document.getElementById("clock").style.display = "none";
      document.getElementById("time").style.display = "inline-block";
      document.getElementById("time").style.animation = "fade-out ease-in-out 1s";
    }, 1000);
  }
  clockVal = !clockVal;
}
const root = document.querySelector(":root");
let theme = true;
function swapTheme(){
  if (theme){
    document.documentElement.style.setProperty('--bg', "#fff");
    document.documentElement.style.setProperty('--colour', "#181625");
  }else{
    document.documentElement.style.setProperty('--bg', "#181625");
    document.documentElement.style.setProperty('--colour', "#fff");
  }
  theme = !theme;
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (hours * 30) + (minutes * 0.5);
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  document.getElementById("hour-hand").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.getElementById("minute-hand").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById("second-hand").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

