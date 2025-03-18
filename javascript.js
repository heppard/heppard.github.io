// Click interaction: Expand, fly away, and open link
document.querySelectorAll(".character-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link"); // Get link from data attribute
    gsap.to(card, {
      scale: 2,               // Expand the card
      rotation: 360,          // Spin for added whimsy
      x: "random(-500, 500)", // Fly off horizontally in a random direction
      y: "random(-500, 500)", // Fly off vertically in a random direction
      opacity: 0,             // Fade out as it flies
      duration: 1.5,          // Control the animation speed
      ease: "power2.out",     // Smooth easing effect
      onComplete: () => {
        window.location.href = link; // Navigate to the link once animation completes
      }
    });
  });
});

// Reset Button Functionality
document.getElementById('reset-btn').addEventListener('click', function () {
  const cards = document.querySelectorAll('.character-card');
  cards.forEach(card => {
    gsap.to(card, {
      scale: 1,         // Reset size
      x: 0,             // Reset horizontal position
      y: 0,             // Reset vertical position
      rotation: 0,      // Reset rotation
      opacity: 1,       // Reset opacity
      duration: 0.5,    // Smooth reset animation
      ease: "power2.out"
    });
  });
  console.log('Cards reset to their original state!');
});