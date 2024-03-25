import {appendDomElements} from "./domStuff.js";

// async function for checking weather data
// if response.ok != true, a new error will be thrown with a specific
// response code - i.e 403 for forbidden - this provides clearer logging

async function checkFetchWorks(input) {
  if (input === undefined) {
    input = "London";
  }
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=2f6644036a934b4582e205036242303&q=${input}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error(`Response error: ${response.status}`)
    } else {
      const weather = await response.json(); 
      return weather;
    }
  } catch (error) {
    console.log("Error retrieving the data " + error);
  }
}

//function to call the async function, and append weather data to DOM
function getWeatherData(startTm, input){
  checkFetchWorks(input)
    .then((weather) => {
      console.log(weather);
      appendDomElements(weather);

      console.log(weather.location.name);
      console.log(weather.location.region);
      console.log(weather.location.lat);
      console.log(weather.location.lon);
      console.log(weather.location.localtime);
      console.log(weather.current.condition.text);
      console.log(weather.current.temp_c);
      console.log(weather.current.temp_f);
      console.log(weather.current.humidity);
    
    })
    .then(() => {
      const runTM = Date.now() - startTm;
      console.log(`Duration was: ${runTM}ms`);
      
    });
}



export { getWeatherData };
