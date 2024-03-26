
import "./style.css";
import { doDomStuff, newDomSkeleton, expandButtonListen, toggleTempScales, toggleSpeedScales } from "./modules/domStuff.js";
import { checkFormValidation } from "./modules/formvalid.js";
import { submitSearch, speedConvert, tempConvert } from "./modules/buttons.js";



newDomSkeleton();
doDomStuff().appendSearchIcon();
doDomStuff().appendExpandIconRight();
expandButtonListen();
checkFormValidation();
submitSearch();
speedConvert();
tempConvert();




// const body = document.querySelector('body');
// body.classList.remove('day');


// // some stuff to get list of weather conditions for later!
// async function getConditions() {

//   const getJson = await fetch('https://www.weatherapi.com/docs/conditions.json', {mode: 'cors'});
//   const json = await getJson.json();
//   console.log(json);
//   let arr = [];
//   for (let x of json) {
//     if (x.day === x.night) {
//       console.log(x.day);
//       arr.push(x.day);
//     } else {
//       console.log(x.day);
//       console.log(x.night);
//       arr.push(x.day, x.night);
     
//     } 
//   }

//   console.log(arr)

// }
// getConditions();

 