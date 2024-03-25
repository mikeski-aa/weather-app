// async function for checking weather data

async function checkFetchWorks(input) {
  if (input === undefined) {
    input = "London";
  }
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=&q=${input}`,
      { mode: "cors" }
    );
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.log("Error retrieving the data " + error);
  }
}

//function to call the async function, retrieve weather data and show how long the request took
function getWeatherData(startTm, input) {
  checkFetchWorks(input)
    .then((weather) => {
      console.log("test");
      console.log(weather);
      const json = weather;
      console.log(`I've assigned X to the new weather data which I fetched, the value is: ${json}`);
    })
    .then(() => {
      const runTM = Date.now() - startTm;
      console.log(`Duration was: ${runTM}ms`);
      
    });
}
export { getWeatherData };
