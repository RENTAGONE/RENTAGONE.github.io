// PRICE RATE

const rate = 0.75


// PARSE ROBUX INPUT

function parseRobux(input){

input = input.toLowerCase()

if(input.includes("k")) return parseFloat(input)*1000
if(input.includes("m")) return parseFloat(input)*1000000
if(input.includes("b")) return parseFloat(input)*1000000000
if(input.includes("t")) return parseFloat(input)*1000000000000

return parseFloat(input)

}


// CALCULATOR

const robuxInput = document.getElementById("robuxInput")
const priceDisplay = document.getElementById("price")

if(robuxInput){

robuxInput.addEventListener("input",()=>{

let robux = parseRobux(robuxInput.value) || 0

let price = robux * rate

priceDisplay.textContent = price.toFixed(2)

})

}



// ORDER SYSTEM

async function sendOrder(){

const siteUser = document.getElementById("siteUser").value
const robloxUser = document.getElementById("robloxUser").value
const discordUser = document.getElementById("discordUser").value
const robux = document.getElementById("orderAmount").value
const payment = document.getElementById("paymentMethod").value

const webhook = "https://discord.com/api/webhooks/1481295676041072742/ouT3Fc0B-flRl_9BzTqDCNfdPvcY59GGvgd4PqHMTNB-2aEf81qYZGbpRXMcDsUYe57l"

const message = {

content:
`NEW RENTAGONE ORDER

Site User: ${siteUser}

Roblox User: ${robloxUser}

Discord: ${discordUser}

Robux Amount: ${robux}

Payment: ${payment}

Status: Pending`
}

fetch(webhook,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(message)

})

alert("Order Sent")

}
