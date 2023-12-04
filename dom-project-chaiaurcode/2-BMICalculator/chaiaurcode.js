window.onload = () => {
  let button = document.querySelector("#calculate");
  button.addEventListener("click", calculateBMI);
};

function calculateBMI(e) {
  e.preventDefault();

  let heightInput = document.querySelector("#height");
  let weightInput = document.querySelector("#weight");
  let result = document.querySelector("#results");

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (isNaN(height) || height <= 0) {
    result.innerHTML = "Please provide a valid positive height!";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    result.innerHTML = "Please provide a valid positive weight!";
    return;
  }

  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Displaying units along with BMI value
  result.innerHTML = `BMI: <span>${bmi} kg/m<sup>2</sup></span>`;

  // Dividing as per the BMI conditions
  if (bmi < 18.6) {
    result.innerHTML += "<br>Underweight";
  } else if (bmi >= 18.6 && bmi < 24.9) {
    result.innerHTML += "<br>Normal Weight";
  } else {
    result.innerHTML += "<br>Overweight";
  }
}
