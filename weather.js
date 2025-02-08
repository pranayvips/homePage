// const apiKey = "e85764cbe7283aee72231f16c1ed2600";

    // Place name
    // Temp to show
    // Weather
    // Weather description
    // Feels Like
    // Sea Level
    // Pressure
    // Humidity
    // Wind Speed
    // Sunset
    // Sunrise

const wea_field = document.getElementsByClassName("wea");
const wea_icon = document.getElementById("icon");

function unixToReadableDate(unixTimestamp) {
    // Convert Unix timestamp from seconds to milliseconds
    const date = new Date(unixTimestamp * 1000);
    const datelist =  date.toUTCString().split(" "); //['Sat,', '03', 'Aug', '2024', '13:43:05', 'GMT']
    return datelist[4];
}

function icon_choose(icon){
    let isAnimated = "animated";
    if(OPTION_LIST[8] == "false"){
        isAnimated = 'static'
     }
        if (icon == "01d"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/day.svg")
        }
        if (icon == "01n"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/night.svg")
        }
        else if (icon == "02d"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/cloudy-day-3.svg")
        }
        else if (icon == "02n"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/cloudy-night-3.svg")
        }
        else if (icon == "03d" || icon ==  "03n" || icon ==  "04d" || icon ==  "04n"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/cloudy.svg")
        }
        else if(icon=="09d" || icon=="10d"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/rainy-3.svg")
        }
        else if(icon=="09n" || icon=="10n"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/rainy-7.svg")
        }
        else if (icon == "11d" || icon ==  "11n"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/thunder.svg")
        }
        else if (icon == "13d"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/snowy-3.svg")
        }
        else if (icon == "13n"){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/snowy-4.svg")
        }else{
            let time = document.getElementById("time").textContent.split(":")[0];
            if(time>6 && time<18){
            wea_icon.setAttribute("src","weather/"+isAnimated+"/day.svg")
            }else{
            wea_icon.setAttribute("src","weather/"+isAnimated+"/night.svg")
            }
            
        }
    
}

async function weather(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=28.4374&lon=77.0345&appid=e85764cbe7283aee72231f16c1ed2600")
    const data = await response.json();
    
    // the title
    wea_field[0].textContent = data["name"];
    // temp to show
    wea_field[1].textContent = (data["main"]["temp"] - 273.15).toFixed(0) + "°C";
    // weather
    wea_field[2].textContent = data["weather"][0]["main"];
    // weather description
    wea_field[3].textContent = data["weather"][0]["description"]
    // feels like
    wea_field[4].textContent = (data["main"]["feels_like"] - 273.15).toFixed(2) + "°C";
    // sea level
    wea_field[5].textContent = data["main"]["sea_level"];
    // pressure
    wea_field[6].textContent = data["main"]["pressure"] + "hPa";
    wea_field[7].textContent = data["main"]["humidity"] +"%"
    wea_field[8].textContent = data["wind"]["speed"] + " m/s"
    wea_field[9].textContent = unixToReadableDate(data["sys"]["sunrise"])
    wea_field[10].textContent = unixToReadableDate(data["sys"]["sunset"])
    wea_field[11].textContent = data["visibility"]+" m"

    icon_choose(data["weather"][0]["icon"])
    // console.log(data["weather"][0]["main"])
    // console.log(data["weather"][0]["description"])
    // console.log(data["weather"][0]["icon"])
    // console.log(data["main"]["temp"])
    // console.log(data["main"]["feels_like"])
    // console.log(data["main"]["temp_min"])
    // console.log(data["main"]["temp_max"])
    // console.log(data["main"]["pressure"])
    // console.log(data["main"]["humidity"])
    // console.log(data["main"]["sea_level"])
    // console.log(data["main"]["grnd_level"])
    // console.log(data["visibility"])
    // console.log(data["wind"]["speed"])
}





// SYNTAX FOR THE WEATHER WE ARE GETTING HERE ABOVE 

// const data = {
//     "coord": {
//         "lon": 72.9781,
//         "lat": 19.2183
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 300.13,
//         "feels_like": 303.13,
//         "temp_min": 300.13,
//         "temp_max": 301.09,
//         "pressure": 1004,
//         "humidity": 83,
//         "sea_level": 1004,
//         "grnd_level": 999
//     },
//     "visibility": 2100,
//     "wind": {
//         "speed": 3.6,
//         "deg": 240,
//         "gust": 8.75
//     },
//     "clouds": {
//         "all": 100
//     },
//     "dt": 1722686110,
//     "sys": {
//         "type": 1,
//         "id": 9052,
//         "country": "IN",
//         "sunrise": 1722645921,
//         "sunset": 1722692585
//     },
//     "timezone": 19800,
//     "id": 1254661,
//     "name": "Thāne",
//     "cod": 200
// }

weather();