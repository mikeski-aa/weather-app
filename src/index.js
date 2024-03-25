import "./style.css";
import { getWeatherData } from "./modules/api.js";
import { doDomStuff, newDomSkeleton } from "./modules/domStuff.js";
import { checkFormValidation } from "./modules/formvalid.js";

const startTm = Date.now();

newDomSkeleton();
doDomStuff().appendImage();
checkFormValidation();

// getWeatherData(startTm, 'Berlin');
