const welcomeMessage = document.getElementById("welcomeMessage");
const text = "Welcome to John Cordon's Résumé!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    welcomeMessage.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Adjust typing speed here
  } else {
    setTimeout(eraseEffect, 1000); // Pause before erasing
  }
}



typeEffect();

document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll('.skill-bar');
  
    // Function to check if the element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.top <= window.innerHeight;
    }
  
    // Function to animate the skill bars
    function animateSkillBars() {
      skillBars.forEach(bar => {
        const skillLevel = bar.querySelector('.skill-level');
        const level = bar.getAttribute('data-level');
  
        // If the skill bar is in view and the width isn't already set, animate it
        if (isInViewport(bar)) {
          if (skillLevel.style.width !== level) {
            skillLevel.style.width = level; // Set width to the desired level
            skillLevel.textContent = level; // Display the percentage
          }
        } else {
          // If the skill bar is out of view, reset the width to 0%
          if (skillLevel.style.width !== '0%') {
            skillLevel.style.width = '0%'; // Reset width to 0%
            skillLevel.textContent = ''; // Clear the text content
          }
        }
      });
    }
  
    // Trigger the animation on scroll
    window.addEventListener('scroll', animateSkillBars);
  
    // Trigger the animation on page load if the skill bars are already in view
    animateSkillBars();
  });

// Select all the sections you want to animate
const sections = document.querySelectorAll('section');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Check if the section is in view
    if (entry.isIntersecting) {
      // Add the class to trigger the fade-in animation
      entry.target.classList.add('section-visible');
    } else {
      // Only remove class if section leaves the viewport
      entry.target.classList.remove('section-visible');
    }
  });
}, {
  threshold: 0.25 // Trigger animation when 25% of the section is in view
});

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when user scrolls down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block"; // Show the button
  } else {
    scrollToTopBtn.style.display = "none"; // Hide the button
  }
};

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll effect
  });
});