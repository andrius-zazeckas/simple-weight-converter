/* 
1. lb = kg * 2.2046
2. g = kg / 0.0010000
3. oz = kg * 35.274
*/

const form = document.querySelector("form");
const poundsElement = document.createElement("p");
const gramsElement = document.createElement("p");
const ozElement = document.createElement("p");

const weightConverter = (event) => {
  event.preventDefault();

  const userInputValue = +document.querySelector("#search").value;
  const output = document.querySelector("#output");

  const weightInPounds = userInputValue * 2.2046;
  const weightInGrams = userInputValue / 0.001;
  const weightInOz = userInputValue * 35.274;

  if (!Number.isNaN(userInputValue)) {
    poundsElement.textContent = `Your weight in Pounds is: ${weightInPounds} lb`;
    gramsElement.textContent = `Your weight in Grams is: ${weightInGrams} g`;
    ozElement.textContent = `Your weight in Oz is: ${weightInOz} oz`;

    output.append(poundsElement, gramsElement, ozElement);
  } else {
    alert("Please input only numbers");
  }
};

form.addEventListener("submit", weightConverter);
