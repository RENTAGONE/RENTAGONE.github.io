// Robux Calculator
const robuxInput = document.getElementById('robux-input');
const priceOutput = document.getElementById('price-output');

robuxInput.addEventListener('input', () => {
  const robux = parseInt(robuxInput.value) || 0;
  const price = robux * 0.75;
  priceOutput.textContent = price.toFixed(2) + " Tk";
});

// Demo vouches
const vouches = [
  { username: "Denolser1", comment: "Got my 160 Robux quickly, smooth!", rating: 5 },
  { username: "Denolser2", comment: "560 Robux delivered, happy customer!", rating: 5 }
];

const vouchesList = document.getElementById('vouches-list');
vouches.forEach(v => {
  const div = document.createElement('div');
  div.classList.add('vouch');
  div.innerHTML = `<strong>${v.username}</strong>: ${v.comment} (${v.rating}/5)`;
  vouchesList.appendChild(div);
});
