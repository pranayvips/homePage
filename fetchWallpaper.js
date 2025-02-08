// Function to fetch JSON content from a URL
async function fetchwallpaper() {
  const url = 'https://www.reddit.com/r/wallpaper/hot.json';
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
      const arrData = data['data']['children'];
      
      // console.log(arrData[Math.floor(Math.random() * (arrData.length - 0 + 1)) + 0]["data"]["url"]);
    } catch (error) {
      // Logging any errors that occur during the fetch process
      // console.error('Error fetching JSON:', error);
    }
  }
  
  // Example usage: fetching JSON from a sample URL
  
//   fetchJSON(jsonUrl)
