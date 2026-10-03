// Valores Base

const convertbutton = document.querySelector(".convert-btn")
const currencySelect = document.querySelector(".currency-selection")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    // Pegando os valores do html
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "dolar") {
        // Formatando o valor para Dolar, colocando pontuação e os cifrão
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        // Formatando o valor para Dolar, colocando pontuação e os cifrão
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(currencyValueToConvert)
    }
}



function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = './assets/usa.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)

convertbutton.addEventListener("click", convertValues)