const form = document.querySelector('#booking-form');
const note = document.querySelector('#form-note');
const checkin = document.querySelector('#checkin');
const checkout = document.querySelector('#checkout');

const today = new Date().toISOString().split('T')[0];
checkin.min = today;
checkout.min = today;
checkin.addEventListener('change', () => { checkout.min = checkin.value || today; });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const guestCount = document.querySelector('#guests').value;
  const subject = encodeURIComponent('Availability request — Apartma Anaa');
  const body = encodeURIComponent(`Hello Ana,\n\nI would like to ask about availability from ${checkin.value} to ${checkout.value} for ${guestCount}.\n\nThank you!`);
  window.location.href = `mailto:hello@apartmaanaa.si?subject=${subject}&body=${body}`;
  note.textContent = 'Opening your email app…';
  note.style.color = '#f2e5d4';
});
