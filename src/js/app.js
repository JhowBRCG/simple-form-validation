const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    const inputValue = input.value;
    if (inputValue !== "") {
      input.classList.add("correct");
    } else {
      input.classList.remove("correct");
    }

    if (inputValue === "") {
      input.classList.add("error");
      input.nextElementSibling.classList.add("show");
    } else {
      input.classList.remove("error");
      input.nextElementSibling.classList.remove("show");
    }
  });
});
