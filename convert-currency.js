const convertCurrencyBtn = document.getElementById('convert-currency')

convertCurrencyBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const inputData = getInputValues()
    const result = getConvertedCurrency(inputData)
    displayConvertedCurrency(result)
}
)

function getInputValues() {
    const amountInput = document.getElementById('amount')
    const exchangeRateInput = document.getElementById('exchange-rate')
    const inputData = {
        amount: amountInput.value,
        exchange_rate: exchangeRateInput.value
    }
    return inputData
}

function getConvertedCurrency(inputData) {
    const scaller = 100
    const amountScaled = inputData.amount * scaller
    const exchangeRateScaled = inputData.exchange_rate * scaller
    const result = (amountScaled * exchangeRateScaled) / (scaller * scaller)
    return result
}

function displayConvertedCurrency(result) {
    const convertedAmountElm = document.getElementById('converted-amount')
    convertedAmountElm.innerText = `${result.toFixed(2)} (${result})`
}
