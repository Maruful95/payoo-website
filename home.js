// function to get input values
function getInputValueNumber(id) {
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)
     return inputFieldValueNumber
}
function getInputValue(id) {
    const inputFieldValue = document.getElementById(id).value
     return inputFieldValue
}

// function to get inner text
function getInnerTextNumber(id) {
    const InnerTextNumber = parseInt(document.getElementById(id).innerText)
     return InnerTextNumber
}

// function to set available balance
function setAvailableBalance(value) {
    document.getElementById("available-balance").innerText = value
}

// function to add toggle feature

function toggleFeature(id) {

    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none"
    }

    document.getElementById(id).style.display = "block"
}
// function to toggle button style

function toggleButtonStyle(id) {
    
    const formBtn = document.getElementsByClassName("form-btn")
    for (const btn of formBtn) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-[#0808081a]","bg-[#ffffff]")
        
    }
    document.getElementById(id).classList.remove("border-[#0808081a]","bg-[#ffffff]")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}




// add money

document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const bank = getInputValue("bank")
    const accountNumber = getInputValue("account-number")
    const amount = getInputValueNumber("add-amount")
    
    const validPin = 1234
    const pin = getInputValueNumber("add-pin")

    const availableBalance = getInnerTextNumber("available-balance")

    if (accountNumber.length < 11) {
        alert("Please provide valid account number")
        return
    }
    else if (pin !== validPin) {
        alert("Please provide valid pin number")
        return
    }

    const newAvailableBalance = amount + availableBalance

    setAvailableBalance(newAvailableBalance)
})


// cash out

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const agentNumber = getInputValue("agent-number")
    const CashOutAmount = getInputValueNumber("cash-out-amount")
    
    const validCashOutPin = 1234
    const cashOutPin = getInputValueNumber("cash-out-pin")

    const availableBalance = getInnerTextNumber("available-balance")

    if (agentNumber.length < 11) {
        alert("Please provide valid account number")
        return
    }
    else if (cashOutPin !== validCashOutPin) {
        alert("Please provide valid pin number")
        return
    }

    const newAvailableBalance = availableBalance - CashOutAmount

    setAvailableBalance(newAvailableBalance)
})


// transfer money

document.getElementById("transfer-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const userAccountNumber = getInputValue("user-account-number")
    const transferMoneyAmount = getInputValueNumber("transfer-money-amount")
    
    const validPin = 1234
    const Pin = getInputValueNumber("pin")

    const availableBalance = getInnerTextNumber("available-balance")

    if (userAccountNumber.length < 11) {
        alert("Please provide valid account number")
        return
    }
    else if (Pin !== validPin) {
        alert("Please provide valid pin number")
        return
    }

    const newAvailableBalance = availableBalance - transferMoneyAmount

    setAvailableBalance(newAvailableBalance)
})


// get bonus

document.getElementById("get-bonus-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const bonusCoupon = getInputValue("bonus-coupon")

    const availableBalance = getInnerTextNumber("available-balance")
    let bonus = 0

    if (bonusCoupon == 1000) {
        bonus += 1000
    }
    else {
        alert("Please provide valid coupon")
        return
    }

    const newAvailableBalance = availableBalance + bonus

    setAvailableBalance(newAvailableBalance)
})


// pay bill

document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const bank = getInputValue("pay-bank")
    const billerAccountNumber = getInputValue("biller-account-number")
    const amount = getInputValueNumber("amount-to-pay")
    
    const validPin = 1234
    const pin = getInputValueNumber("pay-pin")

    const availableBalance = getInnerTextNumber("available-balance")

    if (billerAccountNumber.length < 11) {
        alert("Please provide valid account number")
        return
    }
    else if (pin !== validPin) {
        alert("Please provide valid pin number")
        return
    }

    const newAvailableBalance = availableBalance - amount

    setAvailableBalance(newAvailableBalance)
})



// toggling feature

document.getElementById("add-money-card").addEventListener("click", function (e) {
    toggleFeature("add-money-parent")
    toggleButtonStyle("add-money-card")
})
document.getElementById("cash-out-card").addEventListener("click", function (e) {
    toggleFeature("cash-out-parent")
    toggleButtonStyle("cash-out-card")
})
document.getElementById("transfer-money-card").addEventListener("click", function (e) {
    toggleFeature("transfer-money-parent")
    toggleButtonStyle("transfer-money-card")
})
document.getElementById("get-bonus-card").addEventListener("click", function (e) {
    toggleFeature("get-bonus-parent")
    toggleButtonStyle("get-bonus-card")
})
document.getElementById("pay-bill-card").addEventListener("click", function (e) {
    toggleFeature("pay-bill-parent")
    toggleButtonStyle("pay-bill-card")
})