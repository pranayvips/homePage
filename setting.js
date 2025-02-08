const tab = document.getElementsByClassName("tab")[0].children;
let prev_screen = "general";
let prev_tab = 0;
for (let i in tab){
    try{
        tab[i].addEventListener("click",()=>{
            tab[prev_tab].setAttribute("class","")
            document.getElementsByClassName(prev_screen)[0].style.display = "none";
            prev_screen = tab[i].getAttribute("name");
            document.getElementsByClassName(prev_screen)[0].style.display = "flex";
            tab[i].setAttribute("class","selected")
            prev_tab = i;
            tab[prev_tab].setAttribute("class","selected")

        })
    } catch{}
}

const setting_icon = document.getElementById("setting-icon");
const setting_screen = document.getElementsByClassName("setting")[0];

const setting_cut = document.getElementById("set-cut");
setting_cut.addEventListener("click",()=>{
    // setting_screen.style.display = "none";
    setting_cut.style.display = "none";
    setting_screen.style.bottom = "-300px";
    setting_screen.style.left = "-510px";
    
})

setting_icon.addEventListener("click",()=>{
    // setting_screen.style.display = "block";
    setting_screen.style.bottom = "10px";
    setting_screen.style.left = "10px";
    setTimeout(() => {
        
        setting_cut.style.display = "block";
    }, 1000);
})



// let setting_appear = document.getElementById("settingclicker")

// let setting_appear_status = false;
// // to appear todo screen by clicking the icon
// setting_icon.addEventListener("mouseover",()=>{
//     setting_appear_status = true;
//     setting_icon.style.marginLeft = "0";

// })

// setting_appear.addEventListener("click",()=>{
//     setting_appear_status = true;
//     setting_icon.style.marginLeft = "0";
// })
// setting_appear.addEventListener("mouseover",()=>{
//     if(!setting_appear_status){
//         setting_icon.style.marginLeft = "0";
//     }
// })
// setting_appear.addEventListener("mouseout",()=>{
//     if(!setting_appear_status){
//         setting_icon.style.marginLeft = "-60px";
//     }else{
//         setting_appear_status = false;
//     }
// })