const select1 = document.querySelector("#currency1")
const select2 = document.querySelector("#currency2")


async function getCurrency() {
    const url = "https://open.er-api.com/v6/latest/USD";
    const response = await fetch(url);
    const data = await response.json();

    const rates = Object.keys(data.rates);

    for (const item of rates) {
        select1.innerHTML += "<option>" + item + "</option>";
        select2.innerHTML += "<option>" + item + "</option>";
    }


    const btn = document.querySelector(".submit")
    btn.addEventListener("click", function (event) {
        
        const input = document.querySelector("#input");
        const inputValue = input.value;
        const firstCurrency = select1.value; // выбранная первая валюта
        console.log(firstCurrency);
        const firstValue = data.rates[firstCurrency]; // курс первой валюты
        console.log(firstValue);
            
        const secondCurrency = select2.value; // выбранная вторая валюта
        const secondValue = data.rates[secondCurrency]; // курс второй валюты
        console.log(secondValue);
        console.log(secondCurrency);

        const amountInUSD = inputValue / firstValue;

        const finalAmount = amountInUSD * secondValue;

        console.log(finalAmount)

        const txt = document.querySelector("#txt")
        txt.textContent = "Answer: " + finalAmount;
    });
    
  }
getCurrency();







