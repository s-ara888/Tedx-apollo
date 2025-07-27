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
  const greekLetters = ["Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω"];
  const container = document.getElementById("backgroundLetters");

  for (let i = 0; i < 100; i++) {
    const span = document.createElement("span");
    span.textContent = greekLetters[Math.floor(Math.random() * greekLetters.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.fontSize = Math.random() * 2 + 1 + "rem";
    span.style.animationDuration = 5 + Math.random() * 10 + "s";
    
    container.appendChild(span);
  }
  function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const cardWidth = carousel.querySelector(".card").offsetWidth + 20; // card + gap
  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}




