import { getWeatherData } from "./api.js";
import { formVisibility, toggleTempScales, toggleSpeedScales } from "./domStuff.js";
// this module takes care of search submission
// the form will become visible and at maximum content height when a successful
// search request is processed

function submitSearch() {
  const submitBtn = document.querySelector(".searchButton");
  const input = document.querySelector("#searchInput");
  const errorMessage = document.querySelector(".errorInput, .Active");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (errorMessage.className.match("Active") == null) {
      formVisibility();
      const startTm = Date.now();
      getWeatherData(startTm, input.value);
      input.value = "";
    } else {
      console.log("cant submit this wrong shit");
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

export { submitSearch, tempConvert, speedConvert };
