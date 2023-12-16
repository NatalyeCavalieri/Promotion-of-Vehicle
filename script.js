
const form = document.querySelector("form")
const respVehicle = document.querySelector("#outResp1")
const respInput = document.querySelector("#outResp2")
const resp12times = document.querySelector("#outResp3")

form.addEventListener("submit", (e) =>{
const vehicle = form.inVehicle.value
const price = Number(form.inPrice.value)

const input = price / 2
const Times12 = input / 12

const currencyOptions = { style: "currency", currency: "EUR" }

respVehicle.innerText = `Promotion: ${vehicle}`
respInput.innerText = `Entry of the: ${Times12.toLocaleString("it-IT",currencyOptions
)}`
resp12times.innerText = `Promotion: ${input.toLocaleString("it-IT",currencyOptions
)}`

e.preventDefault()

});