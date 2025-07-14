// Menu mobile toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Form de contato
document.getElementById('contact-form')
  .addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('contact-msg').textContent =
      'Obrigado! Em breve você receberá nossos conteúdos.';
    e.target.reset();
});