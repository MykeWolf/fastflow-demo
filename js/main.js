// ============================================
// MOBILE MENU TOGGLE
// When the hamburger button is clicked,
// we add/remove the "is-open" class on the
// mobile menu — CSS handles the show/hide.
// ============================================
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  });
}
