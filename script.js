// Show Back to Top button when scrolling down
window.addEventListener("scroll", function() {
  const button = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Smooth scroll to top when button clicked
document.getElementById("backToTop").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Pause carousel animation on hover
const carouselTrack = document.querySelector(".carousel-track");
if (carouselTrack) {
  carouselTrack.addEventListener("mouseenter", () => {
    carouselTrack.style.animationPlayState = "paused";
  });
  carouselTrack.addEventListener("mouseleave", () => {
    carouselTrack.style.animationPlayState = "running";
  });
}
