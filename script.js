const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('quoteForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Free CAMTEC Security Quote Request');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\n` +
    `Phone: ${data.get('phone')}\n` +
    `Email: ${data.get('email')}\n` +
    `Property type: ${data.get('property')}\n\n` +
    `Project details:\n${data.get('message') || 'Not provided'}`
  );
  window.location.href = `mailto:info@camtecusa.com?subject=${subject}&body=${body}`;
});
