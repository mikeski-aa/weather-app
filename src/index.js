import "./style.css";
import {getWeatherData} from "./modules/api.js";
import {doDomStuff, newDomSkeleton } from "./modules/domStuff.js";


const startTm = Date.now();

newDomSkeleton();
doDomStuff().appendImage();

getWeatherData(startTm, 'Berlin');




