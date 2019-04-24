// mathematical function to convert temperature from celsius to fahrenheit
function calculateTemp() {
  function celToFah(celsius) {
     var fahrenheit = Math.round((celsius * (9/5)) + 32);
     return fahrenheit;
  }
//mathematical function that converts degrees fahrenheit to degrees celsius
  function fahToCel(fahrenheit) {
     var celsius = Math.round((fahrenheit - 32) * (5/9));
     return celsius;
  }

  // Checks if Calsius or Fahrenheit is selected on the options
  var tempSelected = document.getElementById("temp_diff");
  var valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

  // Checks the value inside the Temperature input
  var numberTemp = document.getElementById("temp").value;

  var result;
  
  if (valueTemp == 1) {
     result = celToFah(numberTemp);
     document.getElementById("result_Container").innerHTML = "= " + result + "°Fahrenheit";
  } else {
     result = fahToCel(numberTemp);
     document.getElementById("result_Container").innerHTML = "= " + result + "°Celsius";
  }
  
}