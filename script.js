// Define Variables

var currency = document.getElementById('currency');
var amount = document.getElementById('amount');



function myFunction() {
const currencyFunction = currency.value;
  const amountFunction = amount.value;
// Fetch values

  fetch('https://v6.exchangerate-api.com/v6/'+apiKey+'/EUR')
          .then(response => response.json())
          .then(data => {
            const conversion_rates = data.conversion_rates[currencyFunction];

// Calculate

 var total = conversion_rates * amountFunction;

  txt = "Congrats! You have " + total.toFixed(2) + " " + currency.value + " !";

  document.getElementById("city").innerHTML = txt;

          });

}
