import { getWeatherData } from "./api.js";
// this module takes care of search submission

function submitSearch() {
  const submitBtn = document.querySelector(".searchButton");
  const input = document.querySelector("#searchInput");
  const errorMessage = document.querySelector(".errorInput, .Active");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (errorMessage.className.match("Active") == null) {
      const startTm = Date.now();
      getWeatherData(startTm, input.value);
      input.value = "";
    } else {
      console.log("cant submit this wrong shit");
    }
  });
}

export { submitSearch };
