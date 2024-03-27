// import search icon from image folder
import searchZoomBoy from "../img/icons/searchIcon.svg";
import arrowRight from "../img/icons/arrowR.svg";
import tempImg from "../img/icons/temp.svg";
import cloud from "../img/icons/cloud.svg";
import compass from "../img/icons/compass.svg";
import earth from "../img/icons/earth.svg";
import feelsLike from "../img/icons/feelsLike.svg";
import humidity from "../img/icons/humidity.svg";
import night from "../img/icons/night.svg";
import rain from "../img/icons/rain.svg";
import snowing from "../img/icons/snowing.svg";
import sunny from "../img/icons/sunny.svg";
import time from "../img/icons/time.svg";
import wind from "../img/icons/wind.svg";
import speed from "../img/icons/speed.svg";

// element manipulation and addition done here
const doDomStuff = () => {
  const mainContent = document.querySelector(".mainContent");
  const expandIcon = document.querySelector("#expandIcon");
  const newDiv = document.createElement("div");
  const newPar = document.createElement("p");
  const container = document.querySelector(".containerDiv");
  const locationDetails = document.querySelector(".locationDetails");
  const currentDetails = document.querySelector(".currentDetails");
  const newImg = document.createElement("img");

  // create expand button
  const newExpandButton = () => {
    const parent = document.querySelector(".locationNameCont");
    const newBtn = document.createElement("button");
    newBtn.textContent = "See details";
    newBtn.classList.add("expandDetails");
    parent.appendChild(newBtn);
  };

  // creates a new div in the main container
  const newDivInMain = (divName) => {
    newDiv.classList.add(`${divName}`);
    mainContent.appendChild(newDiv);
  };

  // creates two main divs within the container div
  const newDivInCtnr = (divName) => {
    newDiv.classList.add(`${divName}`);
    container.appendChild(newDiv);
  };
  // create new content divs within specific container
  const newContentLoc = (divName) => {
    newDiv.classList.add(`${divName}`);
    locationDetails.appendChild(newDiv);
  };

  // create new content divs within specific container
  const newContentCur = (divName) => {
    newDiv.classList.add(`${divName}`);
    currentDetails.appendChild(newDiv);
  };

  // create new paragraph box inside target container
  const newParAdd = (targetDiv, divName) => {
    const target = document.querySelector(`.${targetDiv}`);
    newPar.classList.add(`${divName}`);
    target.appendChild(newPar);
  };

  // create new container inside a container
  const newContainerInTarget = (targetCont, divName) => {
    const target = document.querySelector(`.${targetCont}`);
    newDiv.classList.add(`${divName}`);
    target.appendChild(newDiv);
  };

  //create a new image inside container
  const newImgAdd = (targetDiv, imgName) => {
    const target = document.querySelector(`.${targetDiv}`);
    newImg.classList.add(`${imgName}`);
    target.appendChild(newImg);
  };
  // append data to the dom
  const appendDom = (targetName, text) => {
    const target = document.querySelector(`.${targetName}`);
    target.textContent = text;
  };

  // append icons to specific conditions
  const appendResultIcons = (targetIcon, iconImportName) => {
    const target = document.querySelector(`.${targetIcon}`);
    const myIcon = iconImportName;
    target.src = myIcon;
  };

  // appends search icon to the search text, creating pseudo button
  // needs to be styled appropriately at later stage
  const appendSearchIcon = () => {
    const searchImg = document.querySelector("#searchIcon");
    const searchIcon = searchZoomBoy;
    searchImg.src = searchIcon;
  };

  // appends search icon to the search text, creating pseudo button
  // needs to be styled appropriately at later stage
  const appendExpandIconRight = () => {
    const expandArrow = arrowRight;
    expandIcon.src = expandArrow;
  };

  return {
    newExpandButton,
    appendResultIcons,
    newImgAdd,
    newContainerInTarget,
    appendExpandIconRight,
    newParAdd,
    appendDom,
    newDivInMain,
    newDivInCtnr,
    newContentCur,
    newContentLoc,
    appendSearchIcon,
  };
};

// function neatly creates dom skeleton where values obtained from API can be stored
function newDomSkeleton() {
  doDomStuff().newDivInMain("locationName");
  doDomStuff().newParAdd("locationName", "locationNameBig");
  doDomStuff().newContainerInTarget("locationName", "locationNameCont");
  doDomStuff().newContainerInTarget("locationNameCont", "locationNameTempCont");
  doDomStuff().newParAdd("locationNameTempCont", "locationNameTempVal");
  doDomStuff().newParAdd("locationNameTempCont", "locationNameTempScales");
  doDomStuff().newImgAdd("locationNameTempCont", "locationNameTempImg");
  doDomStuff().newContainerInTarget("locationNameCont", "LocationNameCondCont");
  doDomStuff().newParAdd("LocationNameCondCont", "locationNameCondVal");
  doDomStuff().newImgAdd("LocationNameCondCont", "locationNameCondImg");
  doDomStuff().newExpandButton();

  doDomStuff().newDivInMain("containerDiv");
  doDomStuff().newDivInCtnr("locationDetails");
  doDomStuff().newDivInCtnr("currentDetails");

  doDomStuff().newContentLoc("locRegion");
  doDomStuff().newContentLoc("locLat");
  doDomStuff().newContentLoc("locLon");
  doDomStuff().newContentLoc("locTime");

  doDomStuff().newContentCur("currCondition");
  doDomStuff().newContentCur("currTemp");
  doDomStuff().newContentCur("currHum");
  doDomStuff().newContentCur("currFeels");
  doDomStuff().newContentCur("currWind");
  doDomStuff().newContentCur("currGust");

  doDomStuff().newParAdd("locRegion", "locRegionTemp");
  doDomStuff().newContainerInTarget("locRegion", "locRegionCont");
  doDomStuff().newParAdd("locRegionCont", "locRegionVal");
  doDomStuff().newImgAdd("locRegionCont", "regionImg");

  doDomStuff().newParAdd("locLat", "locLatTemp");
  doDomStuff().newContainerInTarget("locLat", "locLatCont");
  doDomStuff().newParAdd("locLatCont", "locLatVal");
  doDomStuff().newImgAdd("locLatCont", "latImg");

  doDomStuff().newParAdd("locLon", "locLonTemp");
  doDomStuff().newContainerInTarget("locLon", "locLonCont");
  doDomStuff().newParAdd("locLonCont", "locLonVal");
  doDomStuff().newImgAdd("locLonCont", "lonImg");

  doDomStuff().newParAdd("locTime", "locTimeTemp");
  doDomStuff().newContainerInTarget("locTime", "locTimeCont");
  doDomStuff().newParAdd("locTimeCont", "locTimeVal");
  doDomStuff().newImgAdd("locTimeCont", "timeImg");

  doDomStuff().newParAdd("currCondition", "currConditionTemp");
  doDomStuff().newContainerInTarget("currCondition", "currCondCont");
  doDomStuff().newParAdd("currCondCont", "currConditionVal");
  doDomStuff().newImgAdd("currCondCont", "condImg");

  doDomStuff().newParAdd("currTemp", "currTempTemp");
  doDomStuff().newContainerInTarget("currTemp", "currTempCont");
  doDomStuff().newParAdd("currTempCont", "currTempVal");
  doDomStuff().newParAdd("currTempCont", "currTempScales");
  doDomStuff().newImgAdd("currTempCont", "temperatureImg");

  doDomStuff().newParAdd("currHum", "currHumTemp");
  doDomStuff().newContainerInTarget("currHum", "currHumCont");
  doDomStuff().newParAdd("currHumCont", "currHumVal");
  doDomStuff().newImgAdd("currHumCont", "humImg");

  doDomStuff().newParAdd("currFeels", "currFeelsTemp");
  doDomStuff().newContainerInTarget("currFeels", "currFeelsCont");
  doDomStuff().newParAdd("currFeelsCont", "currFeelsVal");
  doDomStuff().newParAdd("currFeelsCont", "currFeelsScales");
  doDomStuff().newImgAdd("currFeelsCont", "temperatureFeelsImg");

  doDomStuff().newParAdd("currWind", "currWindTemp");
  doDomStuff().newContainerInTarget("currWind", "currWindCont");
  doDomStuff().newParAdd("currWindCont", "currWindVal");
  doDomStuff().newParAdd("currWindCont", "currWindScales");
  doDomStuff().newImgAdd("currWindCont", "windImg");

  doDomStuff().newParAdd("currGust", "currGustTemp");
  doDomStuff().newContainerInTarget("currGust", "currGustCont");
  doDomStuff().newParAdd("currGustCont", "currGustVal");
  doDomStuff().newParAdd("currGustCont", "currGustScales");
  doDomStuff().newImgAdd("currGustCont", "gustImg");

  doDomStuff().appendDom("locRegionTemp", "Region:");
  doDomStuff().appendDom("locLatTemp", "Latitude:");
  doDomStuff().appendDom("locLonTemp", "Longitude:");
  doDomStuff().appendDom("locTimeTemp", "Local Time:");
  doDomStuff().appendDom("currConditionTemp", "Conditions:");
  doDomStuff().appendDom("currTempTemp", "Temperature:");
  doDomStuff().appendDom("currHumTemp", "Humidity:");
  doDomStuff().appendDom("currFeelsTemp", "Feels like:");
  doDomStuff().appendDom("currWindTemp", "Wind speed:");
  doDomStuff().appendDom("currGustTemp", "Gust speed:");
}

// function neatly appends the dom elements created from values obtained by the API call
function appendDomElements(weather) {
  if (weather === undefined) {
    console.log("Error location not found");
  } else {
    doDomStuff().appendDom("locationNameBig", weather.location.name);
    doDomStuff().appendDom("locationNameTempVal", weather.current.temp_c);
    doDomStuff().appendDom("locationNameTempScales", " °C ");
    doDomStuff().appendDom(
      "locationNameCondVal",
      weather.current.condition.text
    );

    console.log(weather.current.condition.text);
    doDomStuff().appendDom("locRegionVal", weather.location.region);
    doDomStuff().appendDom("locLatVal", weather.location.lat);
    doDomStuff().appendDom("locLonVal", weather.location.lon);
    doDomStuff().appendDom(
      "locTimeVal",
      dateToTime(weather.location.localtime)
    );
    domBodyTagToggle(checkTimeOfDay(dateToTime(weather.location.localtime)));

    doDomStuff().appendDom("currConditionVal", weather.current.condition.text);
    doDomStuff().appendDom("currTempVal", weather.current.temp_c);
    doDomStuff().appendDom("currTempScales", "°C");
    doDomStuff().appendDom("currHumVal", weather.current.humidity);
    doDomStuff().appendDom("currFeelsVal", weather.current.feelslike_c);
    doDomStuff().appendDom("currFeelsScales", "°C");
    doDomStuff().appendDom("currWindVal", weather.current.wind_kph);
    doDomStuff().appendDom("currWindScales", "KpH");
    doDomStuff().appendDom("currGustVal", weather.current.gust_kph);
    doDomStuff().appendDom("currGustScales", "KpH");

    // append icons appendResultIcons = (targetIcon, iconImportName, iconName)
    doDomStuff().appendResultIcons("locationNameTempImg", tempImg);
    doDomStuff().appendResultIcons(
      "locationNameCondImg",
      weatherCondCheck(weather.current.condition.text)
    );
    doDomStuff().appendResultIcons("regionImg", earth);
    doDomStuff().appendResultIcons("latImg", compass);
    doDomStuff().appendResultIcons("lonImg", compass);
    doDomStuff().appendResultIcons("timeImg", time);
    doDomStuff().appendResultIcons(
      "condImg",
      weatherCondCheck(weather.current.condition.text)
    );
    doDomStuff().appendResultIcons("temperatureImg", tempImg);
    doDomStuff().appendResultIcons("humImg", humidity);
    doDomStuff().appendResultIcons("temperatureFeelsImg", feelsLike);
    doDomStuff().appendResultIcons("windImg", wind);
    doDomStuff().appendResultIcons("gustImg", speed);
  }
}

// function to add event listener to the expand button
function expandButtonListen() {
  const expandBtn = document.querySelector(".expandButton");
  const ul = document.querySelector("ul");
  expandBtn.classList.toggle("hidden");
  ul.classList.toggle("hidden");
  expandBtn.addEventListener("click", (e) => {
    ul.classList.toggle("expanded");
    expandBtn.classList.toggle("expanded");
    expandBtn.classList.toggle("hidden");
    ul.classList.toggle("hidden");
  });
}

// function to show form visibility and height
function formVisibility() {
  let mainContent = document.querySelector(".mainContent");
  mainContent.classList.add("visible");
}

// function to toggle degrees C and F
function toggleTempScales() {
  const currTemp = document.querySelector(".currTempScales");
  const currFeels = document.querySelector(".currFeelsScales");
  const currTempVal = document.querySelector(".currTempVal");
  const currFeelsVal = document.querySelector(".currFeelsVal");
  const largeTempVal = document.querySelector(".locationNameTempVal");
  const largeTempScales = document.querySelector(".locationNameTempScales");

  if (currTemp.textContent == "°C") {
    currTemp.textContent = "F";
    largeTempScales.textContent = "F";
    currFeels.textContent = "F";

    currTempVal.textContent = celsiusToF(currTempVal.textContent);
    currFeelsVal.textContent = celsiusToF(currFeelsVal.textContent);
    largeTempVal.textContent = celsiusToF(largeTempVal.textContent);
  } else {
    currTemp.textContent = "°C";
    largeTempScales.textContent = "°C";
    currFeels.textContent = "°C";

    currTempVal.textContent = farenheitToC(currTempVal.textContent);
    currFeelsVal.textContent = farenheitToC(currFeelsVal.textContent);
    largeTempVal.textContent = farenheitToC(largeTempVal.textContent);
  }
}

// function to convert C to F
function celsiusToF(inputTemp) {
  let fTemp = Math.round(((+inputTemp * (9 / 5) + 32) * 100) / 100);
  return fTemp;
}
// function to convert F to C
function farenheitToC(inputTemp) {
  let cTemp = Math.round(((+inputTemp - 32) * (5 / 9) * 100) / 100);
  return cTemp;
}

// function to toggle mph and kph
function toggleSpeedScales() {
  const currWind = document.querySelector(".currWindScales");
  const currGust = document.querySelector(".currGustScales");
  const currWindVal = document.querySelector(".currWindVal");
  const currGustVal = document.querySelector(".currGustVal");

  if (currWind.textContent == "KpH") {
    currWind.textContent = "MpH";
    currGust.textContent = "MpH";
    currWindVal.textContent = kphToMph(currWindVal.textContent);
    currGustVal.textContent = kphToMph(currGustVal.textContent);
  } else {
    currWind.textContent = "KpH";
    currGust.textContent = "KpH";
    currWindVal.textContent = mphToKph(currWindVal.textContent);
    currGustVal.textContent = mphToKph(currGustVal.textContent);
  }
}

// function to convert kph to mph
function kphToMph(inputSpeed) {
  let mph = Math.round((+inputSpeed * 0.621371192 * 100) / 100);
  return mph;
}
// function to convert mph to kph
function mphToKph(inputSpeed) {
  let kph = Math.round(((+inputSpeed / 0.621371192) * 100) / 100);
  return kph;
}

// function to convert date to only time
function dateToTime(input) {
  let newTime = input.split(" ")[1];
  return newTime;
}

// function to check time of location searched
function checkTimeOfDay(input) {
  let hours = input.split(":")[0];
  return hours;
}

// function to change body tag depending on time
function domBodyTagToggle(input) {
  const body = document.querySelector("body");
  if (input > 18 || input < 6) {
    body.classList.remove("day");
    body.classList.add("night");
  } else {
    body.classList.remove("night");
    body.classList.add("day");
  }
}

// function to check conditions and assign relevant icon
function weatherCondCheck(input) {
  if (input.includes("Clear")) {
    return night;
  } else if (input.includes("Sunny")) {
    return sunny;
  } else if (
    input.includes("Overcast") ||
    input.includes("cloud") ||
    input.includes("Cloud") ||
    input.includes("cloudy") ||
    input.includes("Cloudy")
  ) {
    return cloud;
  } else if (input.includes("Rain") || input.includes("rain")) {
    return rain;
  } else if (input.includes("Snow") || input.includes("snow")) {
    return snowing;
  }
}

export {
  doDomStuff,
  newDomSkeleton,
  appendDomElements,
  expandButtonListen,
  formVisibility,
  toggleTempScales,
  toggleSpeedScales,
};
