import swal from "sweetalert";
import { getWeatherData } from "./api.js";
import { toggleTempScales, toggleSpeedScales } from "./domStuff.js";
// this module takes care of search submission
// the form will become visible and at maximum content height when a successful
// search request is processed

function submitSearch() {
  const submitBtn = document.querySelector(".searchButton");
  const input = document.querySelector("#searchInput");
  const errorMessage = document.querySelector(".errorInput, .Active");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(input.value);
    if (errorMessage.className.match("Active") == null && input.value !== "") {
      getWeatherData(input.value);
      input.value = "";
    }
  });
}

function tempConvert() {
  const li = document.querySelector("#linkThree");
  li.addEventListener("click", (e) => {
    toggleTempScales();
  });
}

function speedConvert() {
  const li1 = document.querySelector("#linkFour");
  li1.addEventListener("click", (e) => {
    toggleSpeedScales();
  });
}

function aboutInfo() {
  const aboutBtn = document.querySelector("#linkTwo");
  aboutBtn.addEventListener("click", (e) => {
    alert();
  });
}

function details() {
  const detailsBtn = document.querySelector(".expandDetails");
  const containerDiv = document.querySelector(".containerDiv");
  const mainCont = document.querySelector(".mainContent");
  detailsBtn.addEventListener("click", (e) => {
    containerDiv.classList.toggle("visible");
    mainCont.classList.toggle("big");
  });
}

function alert() {
  swal({
    title: "About",
    text: "Icons: https://fonts.google.com/icons /// Background images: https://pixabay.com/ /// WeatherAPI: https://www.weatherapi.com/",
    button: "K thnx bai"
  });
}
export { submitSearch, tempConvert, speedConvert, details, aboutInfo };
