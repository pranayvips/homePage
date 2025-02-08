// https://www.reddit.com/gallery/1egc2n5

async function fetchwallpaper() {
    // const url = 'https://www.reddit.com/r/wallpaper/hot.json';
    const url = "https://www.reddit.com/r/wallpaper/comments/1ejnqzd/above_the_ground_under_the_sea_1920x1080/"
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
        // const arrData = data['data']['children'];
        // let link = arrData[Math.floor(Math.random() * (arrData.length - 0 + 1)) + 0]["data"]["url"];
        // let link;
        // for(let i of arrData){
        //     if (!i["data"]["url"].includes(".png")){
        //         link = i["data"];
        //         break;
        //     }
        // }
        
        // console.log(arrData)
        // console.log(data)
      } catch (error) {
        // Logging any errors that occur during the fetch process
        // console.error('Error fetching JSON:', error); 
      }
    }

fetchwallpaper()