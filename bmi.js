const form = document.querySelector('form');
//const height=parseFloat(document.querySelector("#height").value);
//This usecase gives empty value
form.addEventListener('submit', (e) => {
  e.preventDefault(); //prevents default action ie. submission of form to URL or Server
  const height = parseFloat(document.querySelector('#height').value); //get value in string and then convert it to number
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid input';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid input';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} kg/m<sup>2</sup>. <br> You are underweight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `Your BMI is ${bmi} kg/m<sup>2</sup>. <br> You are normal`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} kg/m<sup>2</sup>. <br> You are overweight`;
    }
  }
});
