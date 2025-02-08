// IN todo_top has a length of three and these are
// first one is to add a todo
// second is the minimize button
// third is the close button
const todo_top = document.getElementsByClassName("todotop");
const todo_container = document.getElementsByClassName("todos")[0];
const todo_icon = document.getElementById("todoBtn");
const todo_appear = document.getElementById("todoclicker");

// let todo_appear_status = false;

let todo_create = false;
// add a todo
todo_top[0].addEventListener("click", () => {
  todo_create = !todo_create;
  if (todo_create) {
    document.getElementsByClassName("create")[0].style.display = "none";
  } else {
    document.getElementsByClassName("create")[0].style.display = "flex";
  }
});
// minimize todo screeen
todo_top[1].addEventListener("click", () => {
  document.getElementsByClassName("create")[0].style.display = "none";

  todo_container.style.bottom = "-50vh";
});
// close todo screen
todo_top[2].addEventListener("click", () => {
  document.getElementsByClassName("create")[0].style.display = "none";

  todo_container.style.bottom = "-50vh";
  todo_icon.style.left = "15px";
  // todo_appear_status = false;
});

// to appear todo screen by clicking the icon
todo_icon.addEventListener("click", () => {
  document.getElementsByClassName("create")[0].style.display = "none";

  todo_container.style.bottom = "30px";
});
todo_icon.addEventListener("mouseover", () => {
  // todo_appear_status = true;
  todo_icon.style.left = "-30px";
});


document.addEventListener('mousemove', (e)=>{
  
  if(e.pageX > window.innerWidth - 200 && e.pageY > window.innerHeight - 200){
    todo_icon.style.left = "-30px";
  }else{
    todo_icon.style.left = "15px";
  }
  if(e.pageX < 200 && e.pageY > window.innerHeight - 200){
        setting_icon.style.marginLeft = "0";
      }else{
    setting_icon.style.marginLeft = "-60px";
  }
}, false);
// todo_appear.addEventListener("click", () => {
//   todo_appear_status = true;
//   todo_icon.style.left = "-30px";
// });
// todo_appear.addEventListener("mouseover", () => {
//   if (!todo_appear_status) {
//     todo_icon.style.left = "-30px";
//   }
// });
// todo_appear.addEventListener("mouseout", () => {
//   if (!todo_appear_status) {
//     todo_icon.style.left = "15px";
//   } else {
//     todo_appear_status = false;
//   }
// });



const content_container = document.getElementsByClassName("content")[0];
const todoCreateButton = document.getElementById("todocreate");
const todoCreateInput = todoCreateButton.previousElementSibling;
todoCreateButton.addEventListener("click",()=>{
    if(todoCreateInput.value.length > 2){
        createTodo(todoCreateInput.value,false,false);
        document.getElementsByClassName("create")[0].style.display = "none";
    }else{
    document.getElementsByClassName("create")[0].style.display = "none";
    send_notification(
        "Empty",
        "Please write something before creating a todo, i.e length > 2",
        "Okay!",
        function () {
          notification.style.left = "-22vw";
        }
      );
    }
})
function createTodo(data,value,loader) {
    if(data.length < 2){
        return;
    }
    let old_value = localStorage.getItem("todo");
    if(!loader){
        if(old_value==null){
            localStorage.setItem("todo",data+".;."+value)
        }else{
            localStorage.setItem("todo",old_value+";|;"+data+".;."+value)
        }
    }
  // <div class="data">
  //       <!-- <input type="checkbox" /> -->
  //       <p>Here you can create a todo by pressing add button on top left corner.</p>
  //     </div>
  let div = document.createElement("div");
  div.setAttribute("class", "data");
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  if(value){
    input.checked = true;
    p.style.textDecoration = "line-through";
  }

  input.addEventListener("click", () => {
    if (input.checked) {
      p.style.textDecoration = "line-through";
    } else {
      p.style.textDecoration = "none";
    }
  });

  let p = document.createElement("p");
  p.textContent = data;

  div.appendChild(input);
  div.appendChild(p);

  content_container.appendChild(div);
}


function load_todo(){
    let old_value = localStorage.getItem("todo");
    if(old_value == null){
      return;
    }
    old_value =  old_value.split(";|;");
    // console.log(old_value)
    for (let i of old_value){
        i = i.split(".;.")
        if(i[1]=="true"){
            createTodo(i[0],true,true);
        }else{
            createTodo(i[0],false,true);
        }
    }
}
load_todo()