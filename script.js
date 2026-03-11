// script.js

// Supabase setup
const supabaseUrl = 'https://cnfkccnjisytmzjugftc.supabase.co';
const supabaseKey = 'sb_publishable_vxGaJqrwippDGNrRccqWOw_f6nRX2HW';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Example: Fetch users and their vouches
async function loadVouches() {
  try {
    // Get vouches joined with users and orders
    const { data, error } = await supabase
      .from('vouches')
      .select(`
        vouch_id,
        comment,
        rating,
        created_at,
        order_id,
        orders (
          robux_amount,
          price_tk,
          payment_method,
          status,
          created_at,
          user_id,
          users!inner (
            username,
            discord_tag
          )
        )
      `);

    if (error) {
      console.error('Error fetching vouches:', error);
      return;
    }

    const container = document.getElementById('vouches-container');
    container.innerHTML = '';

    data.forEach(v => {
      const vouchEl = document.createElement('div');
      vouchEl.classList.add('vouch');
      vouchEl.innerHTML = `
        <strong>${v.orders.users.username} (${v.orders.users.discord_tag})</strong>
        <p>${v.comment}</p>
        <small>Rating: ${v.rating} / 5</small>
      `;
      container.appendChild(vouchEl);
    });

  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

// Example: Fetch orders
async function loadOrders() {
  try {
    const { data, error } = await supabase.from('orders').select('*');
    if (error) {
      console.error('Error fetching orders:', error);
      return;
    }
    console.log('Orders:', data);
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

// Call functions on page load
document.addEventListener('DOMContentLoaded', () => {
  loadVouches();
  loadOrders();
});
