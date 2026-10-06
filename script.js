const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Recommendations: show the top 3, rest behind "Show more".
// Without JS all cards stay visible and the button stays hidden.
const recGrid = document.getElementById('rec-grid');
const recToggle = document.getElementById('rec-toggle');

recGrid.classList.add('collapsed');
recToggle.hidden = false;

recToggle.addEventListener('click', () => {
  const collapsed = recGrid.classList.toggle('collapsed');
  recToggle.setAttribute('aria-expanded', !collapsed);
  recToggle.textContent = collapsed ? 'Show more' : 'Show less';
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
