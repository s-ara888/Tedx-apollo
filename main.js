document.addEventListener('DOMContentLoaded', function () {
  const lyre = document.getElementById('lyre');
  const apolloText = document.getElementById('apollo-text');

  window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;

    // Cap scroll movement at 71.2
    const maxScroll = 58.400001525878906;
    const cappedScroll = Math.min(scrollValue, maxScroll);

    // Lyre movement
    lyre.style.top = cappedScroll * 0.9 + 'px';

  });
});


