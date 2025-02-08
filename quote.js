async function quote(){
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const qt = data[Math.floor(Math.random() * (data.length - 0 + 1))];
    // console.log(qt);
}

quote()