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
