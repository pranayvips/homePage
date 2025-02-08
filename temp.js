const weather_card = document.getElementsByClassName("weather-card")[0];
const weather_card_child = weather_card.children;
let card = true;

weather_card.addEventListener("click",()=>{
    weather_card.children[0].classList.toggle("left1");
    if(card){
        card = false;
        weather_card.children[0].style.display = "block";
        // weather_card.style.top = "50px";
        // weather_card.style.right = "100px";
        // weather_card.style.backdropFilter = "blur(10px)";
        // // this selects the left side
        // weather_card_child[0].style.display = "block";
        // // weather_card_child[0].classList.toggle("left1")
        // // this selects the city name
        // weather_card_child[0].children[0].style.display = "block";
        // // this selects the right side
        // weather_card_child[1].style.display = "block";
        weather_card.style.top = "50px";
        weather_card.style.right = "100px";
        weather_card_child[1].style.display = "block";
        
    }else{
        card = true;
        weather_card.style.top = "20px";
        weather_card.style.right = "20px";
        weather_card.children[0].style.display = "flex";
        // weather_card.style.top = "20px";
        // weather_card.style.right = "20px";
        // weather_card.style.backdropFilter = "none";
        // // this selects the left side
        // weather_card_child[0].style.display = "flex";
        // weather_card_child[0].classList.toggle("left1")
        // // this selects the city name
        // weather_card_child[0].children[0].style.display = "none";
        // // this selects the right side
        weather_card_child[1].style.display = "none";
    }
})