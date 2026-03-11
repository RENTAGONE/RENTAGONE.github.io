// SCROLL POP-IN ANIMATION
const animElements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
  animElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// ROBUX CALCULATOR
const input = document.getElementById('robuxInput');
const priceDisplay = document.getElementById('priceDisplay');

input.addEventListener('input', () => {
  let val = input.value.toLowerCase().replace(/[^\d.kmbt]/g,'');
  let multiplier = 1;
  if(val.endsWith('k')) multiplier = 1e3;
  if(val.endsWith('m')) multiplier = 1e6;
  if(val.endsWith('b')) multiplier = 1e9;
  if(val.endsWith('t')) multiplier = 1e12;
  val = parseFloat(val) || 0;
  let total = val * multiplier * 0.75; // 75 BDT per 100 Robux
  priceDisplay.textContent = total.toLocaleString('en-US', {maximumFractionDigits:2}) + ' BDT';
});
