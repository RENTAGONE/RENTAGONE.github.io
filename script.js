// Supabase setup
const supabaseUrl = "https://cnfkccnjisytmzjugftc.supabase.co";
const supabaseKey = "sb_publishable_vxGaJqrwippDGNrRccqWOw_f6nRX2HW";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Scroll animations
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Robux calculator
const robuxInput = document.getElementById("robux-input");
const priceOutput = document.getElementById("price-output");

robuxInput.addEventListener("input", () => {
  const amount = parseInt(robuxInput.value) || 0;
  priceOutput.textContent = amount * 0.75; // 100 Robux = 75 BDT
});

// Fetch vouches
async function loadVouches() {
  const { data, error } = await supabase
    .from('vouches')
    .select('username, comment, rating')
    .order('created_at', { ascending: false });

  const container = document.getElementById("vouches-container");
  if (data) {
    data.forEach(v => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${v.username}</strong> (${v.rating}/5): ${v.comment}`;
      container.appendChild(div);
    });
  }
}

loadVouches();
