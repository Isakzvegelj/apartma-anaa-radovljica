const directForm = document.querySelector('#direct-form');
const directNote = document.querySelector('#direct-form-note');
const directCheckin = document.querySelector('#direct-checkin');
const directCheckout = document.querySelector('#direct-checkout');
// Add the real owner email here when ready. Keep it empty until verified.
const DIRECT_BOOKING_EMAIL = '';
const today = new Date().toISOString().split('T')[0];

directCheckin.min = today;
directCheckout.min = today;
directCheckin.addEventListener('change', () => { directCheckout.min = directCheckin.value || today; });

directForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (DIRECT_BOOKING_EMAIL) {
    const subject = encodeURIComponent('Direct booking enquiry — Apartment Anaa');
    const body = encodeURIComponent(`Name: ${document.querySelector('#direct-name').value}\nEmail: ${document.querySelector('#direct-email').value}\nCheck in: ${directCheckin.value}\nCheck out: ${directCheckout.value}\nGuests: ${document.querySelector('#direct-guests').value}\nMessage: ${document.querySelector('#direct-message').value}`);
    window.location.href = `mailto:${DIRECT_BOOKING_EMAIL}?subject=${subject}&body=${body}`;
    return;
  }
  directNote.textContent = 'The form is ready, but the owner email has not been configured yet. Please add it in app.js before publishing enquiries.';
  directNote.classList.add('form-note-alert');
});
