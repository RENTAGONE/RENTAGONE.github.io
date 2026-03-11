// ROBUX CALCULATOR
const robuxInput = document.getElementById("robux");
const priceSpan = document.getElementById("price");

const rate = 75 / 100; // 100 robux = 75 BDT

if (robuxInput) {
robuxInput.addEventListener("input", () => {
let robux = parseFloat(robuxInput.value) || 0;
let price = robux * rate;
priceSpan.textContent = price.toFixed(2);
});
}


// SEND ORDER TO DISCORD
async function sendOrder(){

const username = document.getElementById("username").value;
const discord = document.getElementById("discord").value;
const robux = document.getElementById("orderRobux").value;
const payment = document.getElementById("payment").value;

const webhook = "https://discord.com/api/webhooks/1481295676041072742/ouT3Fc0B-flRl_9BzTqDCNfdPvcY59GGvgd4PqHMTNB-2aEf81qYZGbpRXMcDsUYe57l";

const message = {
content:
`📦 NEW RENTAGONE ORDER

👤 Username: ${username}
💬 Discord: ${discord}
💰 Robux Amount: ${robux}
💳 Payment Method: ${payment}`
};

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(message)
});

alert("Order submitted! Check Discord.");
}
