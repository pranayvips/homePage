// const set_color = document.getElementsByClassName("set-color");
const apply = document.getElementById("set-apply");

apply.addEventListener("click",()=>{
    // title color , wish text color, quote color, iconns colors
    document.getElementById("time").style.color = set_color[0].value;
    document.getElementById("wish").style.color = set_color[1].value;
    document.getElementById("quote").style.color = set_color[2].value;
    localStorage.setItem("setting-color",set_color[0].value+","+set_color[1].value+","+set_color[2].value+","+set_color[3].value) ;
})
function update_option_list(){
   
    localStorage.setItem("setting", OPTION_LIST.join(","));
    location.reload()
}
for(let i in set_button){
    try{

        set_button[i].addEventListener("click",()=>{
            OPTION_LIST[i] = ""+set_button[i].checked;
            update_option_list();
        })
    }catch{}
}
// setting storing values 
// general-> new wallpaper , new quote , border weather
// personalise-> title color,wishcolor, quote color, icons color
// customise - >hide notification,hide todo, hide quote,hide wish,hide temperature,animated weather
// sync - > turn on sync
