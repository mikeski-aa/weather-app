// import search icon from image folder
import searchZoomBoy from "../img/searchIcon.svg";
import arrowRight from "../img/arrowR.svg";
import arrowLeft from "../img/arrowL.svg";


// element manipulation
const doDomStuff = () => {
  const mainContent = document.querySelector(".mainContent");
  const expandIcon = document.querySelector("#expandIcon");
  const newDiv = document.createElement("div");
  const newPar = document.createElement("p");
  const container = document.querySelector(".containerDiv");
  const locationDetails = document.querySelector(".locationDetails");
  const currentDetails = document.querySelector(".currentDetails");

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

  // append data to the dom
  const appendDom = (targetName, text) => {
    const target = document.querySelector(`.${targetName}`);
    target.textContent = text;
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

  const appendExpandIconLeft = () => {
    const expandArrow = arrowLeft;
    expandIcon.src = expandArrow;
  };

  return {
    appendExpandIconRight,
    appendExpandIconLeft,
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
  doDomStuff().newParAdd("locRegion", "locRegionVal");
  doDomStuff().newParAdd("locLat", "locLatTemp");
  doDomStuff().newParAdd("locLat", "locLatVal");
  doDomStuff().newParAdd("locLon", "locLonTemp");
  doDomStuff().newParAdd("locLon", "locLonVal");
  doDomStuff().newParAdd("locTime", "locTimeTemp");
  doDomStuff().newParAdd("locTime", "locTimeVal");

  doDomStuff().newParAdd("currCondition", "currConditionTemp");
  doDomStuff().newParAdd("currCondition", "currConditionVal");
  doDomStuff().newParAdd("currTemp", "currTempTemp");
  doDomStuff().newParAdd("currTemp", "currTempVal");
  doDomStuff().newParAdd("currHum", "currHumTemp");
  doDomStuff().newParAdd("currHum", "currHumVal");
  doDomStuff().newParAdd("currFeels", "currFeelsTemp");
  doDomStuff().newParAdd("currFeels", "currFeelsVal");
  doDomStuff().newParAdd("currWind", "currWindTemp");
  doDomStuff().newParAdd("currWind", "currWindVal");
  doDomStuff().newParAdd("currGust", "currGustTemp");
  doDomStuff().newParAdd("currGust", "currGustVal");
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
    doDomStuff().appendDom("locationName", weather.location.name);
    doDomStuff().appendDom("locRegionVal", weather.location.region);
    doDomStuff().appendDom("locLatVal", weather.location.lat);
    doDomStuff().appendDom("locLonVal", weather.location.lon);
    doDomStuff().appendDom("locTimeVal", weather.location.localtime);

    doDomStuff().appendDom("currConditionVal", weather.current.condition.text);
    doDomStuff().appendDom("currTempVal", weather.current.temp_c);
    doDomStuff().appendDom("currHumVal", weather.current.humidity);
    doDomStuff().appendDom("currFeelsVal", weather.current.feelslike_c);
    doDomStuff().appendDom("currWindVal", weather.current.wind_kph);
    doDomStuff().appendDom("currGustVal", weather.current.gust_kph);
  }
}

export { doDomStuff, newDomSkeleton, appendDomElements };
