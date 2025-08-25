// loginButton functionality
document.getElementById("loginButton").addEventListener("click", function (e) {
    e.preventDefault()
    const mobileNumber = 12345678901
    const pin = 1234
    const mobileNumberValue = document.getElementById("number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinValue = document.getElementById("pin").value
    const pinValueConverted = parseInt(pinValue)

    if (mobileNumberValueConverted === mobileNumber && pinValueConverted === pin) {
        window.location.href="./home.html"
    }
    else {
        alert("Invalid Credentials")
    }

})