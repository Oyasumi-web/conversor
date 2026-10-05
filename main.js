// Valores Base
const convertbutton = document.querySelector(".convert-btn")
const currencySelect = document.querySelector(".currency-selection")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    // Pegando os elementos do HTML (sem o .value, pois são elementos de texto)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const ieneToday = 0.033
    const bitcoinToday = 449293.32

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday )
    }

    // Exibindo o valor original formatado em Reais (usando inputCurrencyValue)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
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

    if (currencySelect.value == 'iene') {
        currencyName.innerHTML = "Iene"
        currencyImg.src = "./assets/japan.png"
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.jpg"
    }



    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertbutton.addEventListener("click", convertValues)