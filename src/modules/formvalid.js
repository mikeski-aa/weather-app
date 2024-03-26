// validation statement for form
// regular expression is used to check for special characters, number characters
// spaces are allowed as certain places have spaces in their names, i.e Hong Kong
// this function will also dynamically adjust text content of the error div to give
// error feedback to the user

const checkFormValidation = () => {
  const input = document.querySelector("#searchInput");
  const errorInput = document.querySelector(".errorInput");
  const submitBtn = document.querySelector(".searchButton");
  const re = new RegExp("^[a-zA-Z ]+$");


  input.addEventListener("input", (e) => {
    console.log(input.value.length);

    if (input.validity.valueMissing) {
      input.className = "errorActive";
      errorInput.className = "errorInput Active";
      errorInput.textContent = "Search field cannot be empty!";

    } else if (!input.value.match(re)) {
      console.log("INVALID INPUT");
      input.className = "errorActive";
      errorInput.className = "errorInput Active";
      errorInput.textContent =
        "You must enter a City name, the name cannot include numbers or any special characters!";

    } else {
      input.className = "";
      errorInput.className = "errorInput";
      errorInput.textContent = "";
 
    }
  });

};

export { checkFormValidation };
