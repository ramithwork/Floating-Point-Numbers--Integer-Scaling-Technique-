const btnCalculateTip = document.getElementById("calculate-tip") // Getting the button element so we can add an event listener to it.

btnCalculateTip.addEventListener("click", function (event) {
    event.preventDefault() // Prevent the default action of the button, which is to submit the form and refresh the page. The 'event' parameter is the event object that is passed to the function when the event occurs.
    const inputData = getInputValues()
    const tipAmount = calculateTip(inputData.billAmount, inputData.tipPercentage)
    displayTipAmount(tipAmount)
})

// Function to get the values from the input fields. The function gets the values of the bill amount and tip percentage from the input fields, and returns them as an object.
function getInputValues() {
    const inputBillAmount = document.getElementById("bill-amount")
    const inputTipPercentage = document.getElementById("tip-percentage")
    const inputData = {
        billAmount: inputBillAmount.value,
        tipPercentage: inputTipPercentage.value
    }
    return inputData
}

// Function to calculate the tip amount. The function takes the bill amount and tip percentage as arguments, converts them to integers, calculates the tip amount, and returns it.
function calculateTip(billAmount, tipPercentage) {
    const billAmountInt = parseFloat(billAmount) * 100 // Scalling by 100 because we are using 2 decimal places for the tip amount.
    const tipPercentageInt = (parseFloat(tipPercentage)) * 100 // Scalling by 100 because we are using 2 decimal places for the tip percentage.
    const tipAmountInt = billAmountInt * (tipPercentageInt / 100) // Calculating the tip amount in cents.
    const tipAmount = tipAmountInt / (100 * 100) // 100 * 100 because we are using 2 decimal places for the tip amount. Therefore, we need to divide by 100 * 100 to get the tip amount in dollars.
    return tipAmount
}

function displayTipAmount(tipAmount) {
    const tipAmountDisplay = document.getElementById("tip-amount")
    tipAmountDisplay.innerText = `Tip Amount: ${tipAmount.toFixed(2)}` // Displaying the tip amount in 2 decimal places.
}

