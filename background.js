var bookmark;
chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
    // console.log(bookmarkTreeNodes[0]["children"]);   // this had a length of 3
    // console.log(bookmarkTreeNodes[0]["children"][0]["children"])
    // console.log(bookmarkTreeNodes[0]["children"][0]["children"])

    bookmark =  bookmarkTreeNodes[0]["children"];
    load_default();
  });

const books_container = document.getElementsByClassName("books")[0];
const heading = document.getElementById("context-heading");

function create_folder_svg() {
  const SVG_NS = "http://www.w3.org/2000/svg";

  // Create the SVG element
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("xmlns", SVG_NS);
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("class", "size-6");

  // Create the <path> element
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
  );

  // Append the <path> to the <svg>
  svg.appendChild(path);
  return svg;
}
function create_link_svg() {
  const SVG_NS = "http://www.w3.org/2000/svg";

  // Create the SVG element
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("xmlns", SVG_NS);
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("class", "size-6");

  // Create the path element
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
  );

  // Append the path to the SVG
  svg.appendChild(path);
  return svg;
}
const notification1 = document.getElementsByClassName("notification")[0];
function send_notification1(title,content,button,action){
    notification1.style.left = "10px";
    let children = notification1.children;
    children[0].textContent = title,
    children[1].textContent = content,
    children[2].textContent = button,
    children[2].addEventListener("click",()=>{
        action();
    })
    setTimeout(() => {
    notification1.style.left = "-22vw";
    }, 5000);
}


let CURRENT_LIST = [];
let HISTORY_LIST = [0];
function bookmark_create(title, link, folder) {
  let div = document.createElement("div");
  if (folder) {
    div.setAttribute("class", "folder");
    div.appendChild(create_folder_svg());
  } else {
    div.setAttribute("class", "link");
    div.appendChild(create_link_svg());
  }
  let p = document.createElement("p");
  if (title.length > 30) {
    p.textContent = title.substring(0, 30) + "...";
  } else {
    p.textContent = title;
  }
  div.appendChild(p);
  if (!folder) {
    div.setAttribute("title", title);
    div.addEventListener("click", () => {
        try{
            window.open(link, "_blank");
        }catch(e){
            send_notification1("Unable to Open :(","Error : "+e,"Copy link here!",()=>{
                navigator.clipboard.writeText(title);
            })
        }
    });
  } else {
    div.addEventListener("click", () => {
      HISTORY_LIST.push(link);
      CURRENT_LIST = CURRENT_LIST[link];
      heading.textContent = CURRENT_LIST["title"];
      CURRENT_LIST = CURRENT_LIST["children"];
      loader();
    });
  }
  books_container.appendChild(div);
}

document.getElementById("book-close").addEventListener("click",()=>{
    document.getElementsByClassName("bookmark")[0].style.display = "none";
})
const back = document.getElementById("book-back");
back.addEventListener("click", () => {
    if(HISTORY_LIST.length ==1){
        return;
    }
    else if(HISTORY_LIST.length == 2){
        HISTORY_LIST.pop();
        load_default();
        return;
    }
  HISTORY_LIST.pop();

  console.log("back" + HISTORY_LIST);
  for (let i = 0; i < HISTORY_LIST.length - 1; i++) {
    CURRENT_LIST = bookmark[HISTORY_LIST[i]];   
  }
  heading.textContent = CURRENT_LIST["title"];
  CURRENT_LIST = CURRENT_LIST["children"];
  loader()
});
function loader(){
    books_container.innerHTML = "";
    let count = 0;
      for (let j of CURRENT_LIST) {
        if ("url" in j) {
          bookmark_create(j["title"], j["url"], false);
        } else {
          bookmark_create(j["title"], count, true);
        }
        count += 1;
    }
}
function load_default() {
    books_container.innerHTML = "";
    let count = 0;
    heading.textContent = "All Bookmarks"
  CURRENT_LIST = bookmark;
  for (let j of CURRENT_LIST) {
    if ("url" in j) {
      bookmark_create(j["title"], j["url"], false);
    } else {
      bookmark_create(j["title"], count, true);
      count += 1;
    }
  }
}

