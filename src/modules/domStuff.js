// import search icon from image folder
import searchImg from "../img/searchIcon.svg";
const searchIcon = searchImg;
// assign search icon source


// element manipulation
const doDomStuff = () => {
  const mainContent = document.querySelector(".mainContent");
  const searchBtn = document.querySelector(".searchButton");
  const searchImg = document.querySelector("#searchIcon");
  const newDiv = document.createElement("div");
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

  // append data to the dom
  const appendDom = (targetName, text) => {
    const target = document.querySelector(`.${targetName}`);
    target.textContent = text;
  }

  // appends search icon to the search text, creating pseudo button
  // needs to be styled appropriately at later stage
  const appendImage = () => {

    searchImg.src = searchIcon;
  };

  return {
    appendDom,
    newDivInMain,
    newDivInCtnr,
    newContentCur,
    newContentLoc,
    appendImage,
  };
};

function newDomSkeleton(){
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
}

function appendDomElements(weather){
  if (weather === undefined) {
    console.log('Error location not found');
  } else {
  doDomStuff().appendDom('locationName', weather.location.name);
  doDomStuff().appendDom('locRegion', weather.location.region);
  doDomStuff().appendDom('locLat', weather.location.lat);
  doDomStuff().appendDom('locLon', weather.location.lon);
  doDomStuff().appendDom('locTime', weather.location.localtime);

  doDomStuff().appendDom('currCondition', weather.current.condition.text);
  doDomStuff().appendDom('currTemp', weather.current.temp_c);
  doDomStuff().appendDom('currHum', weather.current.humidity);
  doDomStuff().appendDom('currFeels', weather.current.feelslike_c);
  doDomStuff().appendDom('currWind', weather.current.wind_kph);
  doDomStuff().appendDom('currGust', weather.current.gust_kph);
  }

}

export { doDomStuff, newDomSkeleton,appendDomElements };
