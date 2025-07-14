<<<<<<< HEAD
// Menu mobile toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Form de contato
document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('contact-msg').textContent =
    'Obrigado! Em breve você receberá nossos conteúdos.';
  e.target.reset();
});

// Newsletter via Netlify Forms (AJAX)
const newsletterForm = document.querySelector('form[name="newsletter"]');
const successMsg = document.querySelector('.form-success');
const errorMsg   = document.querySelector('.form-error');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    successMsg.style.display = 'none';
    errorMsg.style.display   = 'none';
    const submitBtn = this.querySelector('button');
    submitBtn.disabled = true;

    const formData = new FormData(this);
    const body = new URLSearchParams(formData).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })
    .then(response => {
      if (response.ok) {
        successMsg.style.display = 'block';
        this.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(() => {
      errorMsg.style.display = 'block';
    })
    .finally(() => {
      submitBtn.disabled = false;
    });
  });
=======
// Menu mobile toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Form de contato
document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('contact-msg').textContent =
    'Obrigado! Em breve você receberá nossos conteúdos.';
  e.target.reset();
});

// Newsletter via Netlify Forms (AJAX)
const newsletterForm = document.querySelector('form[name="newsletter"]');
const successMsg = document.querySelector('.form-success');
const errorMsg   = document.querySelector('.form-error');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    successMsg.style.display = 'none';
    errorMsg.style.display   = 'none';
    const submitBtn = this.querySelector('button');
    submitBtn.disabled = true;

    const formData = new FormData(this);
    const body = new URLSearchParams(formData).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })
    .then(response => {
      if (response.ok) {
        successMsg.style.display = 'block';
        this.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(() => {
      errorMsg.style.display = 'block';
    })
    .finally(() => {
      submitBtn.disabled = false;
    });
  });
>>>>>>> 782b017 (Integração automática de notícias)
}