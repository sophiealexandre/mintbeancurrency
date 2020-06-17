// Define Variables

var currency = document.getElementById('currency');
var amount = document.getElementById('amount');



function myFunction() {
const currencyFunction = currency.value;
  const amountFunction = amount.value;
// Fetch values

  fetch('https://v6.exchangerate-api.com/v6/ac3b15a0577ed4a91b0c4277/latest/EUR')
          .then(response => response.json())
          .then(data => {
            const conversion_rates = data.conversion_rates[currencyFunction];

// Calculate

 var total = conversion_rates * amountFunction;

  txt = "Congrats! You have " + total + " !";

  document.getElementById("city").innerHTML = txt;

          });

}
