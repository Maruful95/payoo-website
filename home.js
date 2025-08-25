// add money

document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    
    const validPin = 1234
    const pin = parseInt(document.getElementById("add-pin").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (accountNumber.length < 11) {
        alert("Please provide valid account number")
        return
    }
    else if (pin !== validPin) {
        alert("Please provide valid pin number")
        return
    }

    const newAvailableBalance = amount + availableBalance

    document.getElementById("available-balance").innerText = newAvailableBalance
})



// cash out

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const agentNumber = document.getElementById("agent-number").value
    const CashOutAmount = parseInt(document.getElementById("cash-out-amount").value)
    
    const validCashOutPin = 1234
    const cashOutPin = parseInt(document.getElementById("cash-out-pin").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (agentNumber.length < 11) {
        alert("Please provide valid account number")
        return
    }
    else if (cashOutPin !== validCashOutPin) {
        alert("Please provide valid pin number")
        return
    }

    const newAvailableBalance = availableBalance - CashOutAmount

    document.getElementById("available-balance").innerText = newAvailableBalance
})



// toggling feature

document.getElementById("add-money-card").addEventListener("click", function (e) {
    document.getElementById("cash-out-parent").style.display = "none"

    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out-card").addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none"

    document.getElementById("cash-out-parent").style.display = "block"
})