const time = document.getElementById("time");
setInterval(() => {
    
    let now = new Date();
    
    let formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    time.textContent = formattedTime;
}, 60);


let now = new Date();
now = now.getHours();

if (now>=6 && now < 12){
    document.getElementById("wish").textContent = "Good Morning";
    document.getElementById("wish-icon").children[0].setAttribute("d","M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z")
    document.getElementById("wish-icon").style.animation = "morning 20s linear infinite";
}
else if (now>=12 && now < 16){
    document.getElementById("wish").textContent = "Good Afternoon";
}
else if (now>=16 && now < 23){
    document.getElementById("wish").textContent = "Good Evening";
    document.getElementById("wish-icon").style.animation = "evening 4s linear infinite";
    document.getElementById("wish-icon").children[0].setAttribute("d","M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z")
}
else if (now>=23 && now < 6){
    document.getElementById("wish").textContent = "Have a Good Night";
    document.getElementById("wish-icon").style.animation = "night 8s linear infinite";
    document.getElementById("wish-icon").children[0].setAttribute("d","M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z")
}


