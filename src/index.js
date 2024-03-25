import "./style.css";
import {getWeatherData} from "./api.js";



const startTm = Date.now();

getWeatherData(startTm, 'Berlin');
console.log(`I've assigned X to the new weather data which I fetched, the value is: ${x}`);


