import { appendDomElements } from "./domStuff.js";
import swal from "sweetalert";
// async function for checking weather data
// if response.ok != true, a new error will be thrown with a specific
// response code - i.e 403 for forbidden - this provides clearer logging

async function checkFetchWorks(input) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=&q=${input}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const weather = await response.json();
      return weather;
    }
  } catch (error) {
    if (error == 'Error: 400') {
        swal('You must enter a valid location name! Error code: 400 Bad Request')
    }
    else swal(`Ooops something went wrong ` + error);
  }
}

//function to call the async function, and append weather data to DOM
function getWeatherData(startTm, input) {
  checkFetchWorks(input)
    .then((weather) => {
      console.log(weather);
      appendDomElements(weather);
    })
    .then(() => {
      const runTM = Date.now() - startTm;
      console.log(`Duration was: ${runTM}ms`);
    });
}

export { getWeatherData };
