<h2>Projeto Conversão de Moeda</h2>
<p>Nesse projeto foi usado Html Semântico, Css, mas o destaque desse projeto foi a utilização do JavaScript para fazer a parte lógica do projeto</p>

<p>Essa parte é para ser usado outras vezes no projeto e colocar eventos de acionar ao ser interagido</p>

```JavaScript
const convertbutton = document.querySelector(".convert-btn")
const currencySelect = document.querySelector(".currency-selection")
```

---
<br>
<p>Criamos uma função para ser chamada toda vez que eu precise que ela seja usada, primeiro selecionando os elementos que eu irei alterar e deixando o numero base de todos os valores das moedas</p>
<br>

```JavaScript
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const ieneToday = 0.033
    const bitcoinToday = 449293.32
```
<br>
<p>Criação de condições para as moedas, fazendo a lógica do calculo entre as moedas e já adicionando ao Html para o usuário</p>
<br>

```JavaScript
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
```
<br>
<p>Criando outra função para quando o usuário clicar na caixa trocando de moedas ele além de trocar a imagem e o texto do html, ele chamar a funcção "convertValues()" para que o usuario não precise clicar no botão novamente para chamar a função, criando uma UX dinâmica</p>
<br>

```JavaScript
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
```
<br>
<p>E Finalmente, para que as funções sejam usadas, colocamos um ouvinte nos elementos chaves do html para toda vez que clicar no botão, ou trocarem de moeda ele chamar as funções respectivas</p>
<br>

```JavaScript
currencySelect.addEventListener('change', changeCurrency)
convertbutton.addEventListener("click", convertValues)
```

<p>Esse foi meu primeiro projeto com JavaScript, tive pouca dificuldade implementando novas moedas, o próximo passo seria criar uma conversão de outras moedas que não sejam o Real, mas isso fica pra outro dia ksks</p>
