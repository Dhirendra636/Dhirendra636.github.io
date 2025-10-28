document.addEventListener("DOMContentLoaded", function() {

  // ===== START: FETCH HEADER =====
  fetch('header.html')
    .then(response => {
      if (!response.ok) throw new Error('Header file not found');
      return response.text();
    })
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      // हेडर का JavaScript कोड
      const header = document.getElementById('main-header');
      const menuToggle = document.getElementById('menu-toggle');
      const nav = document.getElementById('navbar');

      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
      });

      if (menuToggle) {
        menuToggle.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }

      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = nav.querySelectorAll('a');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    })
    .catch(error => console.error('Error loading the header:', error));
  // ===== END: FETCH HEADER =====

  // ===== START: FETCH FOOTER =====
  fetch('footer.html')
    .then(response => {
        if (!response.ok) throw new Error('Footer file not found');
        return response.text();
    })
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading the footer:', error));
  // ===== END: FETCH FOOTER =====

}); // <-- DOMContentLoaded यहाँ बंद होता है
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
    // Force repaint so the footer displays correctly
    setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
  })
  .catch(err => console.error('Footer Load Error:', err));

  // Wait for the HTML document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

  // --- SLIDER LOGIC ---
  const slides = document.querySelectorAll(".slide"); // Get all elements with the class 'slide'
  let index = 0; // Initialize the current slide index to 0 (the first slide)

  // Function to update the visual state (position, scale, opacity) of the slides
  function updateSlides() {
    // Loop through each slide
    slides.forEach((slide, i) => {
      // Reset default styles for all slides first
      slide.style.opacity = "0"; // Make it invisible
      slide.style.transform = "scale(0.5)"; // Make it small
      slide.style.zIndex = "0"; // Send it to the back
    });

    // Calculate the index of the slide to the left of the current one
    // The '+ slides.length' ensures the result is always positive before the modulo
    let left = (index - 1 + slides.length) % slides.length; 
    // Calculate the index of the slide to the right of the current one
    let right = (index + 1) % slides.length;

    // --- Apply styles to the CURRENT slide ---
    slides[index].style.opacity = "1"; // Make it fully visible
    slides[index].style.transform = "scale(1) translateZ(0)"; // Bring it to normal size and front
    slides[index].style.zIndex = "3"; // Set highest z-index

    // --- Apply styles to the LEFT slide ---
    slides[left].style.opacity = "0.8"; // Make it slightly transparent
    // Move it left, slightly back (translateZ), make it smaller, and rotate it
    slides[left].style.transform = "translateX(-70%) scale(0.8) rotateY(35deg) translateZ(-150px)"; 
    slides[left].style.zIndex = "2"; // Place it behind the center slide

    // --- Apply styles to the RIGHT slide ---
    slides[right].style.opacity = "0.8"; // Make it slightly transparent
    // Move it right, slightly back (translateZ), make it smaller, and rotate it
    slides[right].style.transform = "translateX(70%) scale(0.8) rotateY(-35deg) translateZ(-150px)";
    slides[right].style.zIndex = "2"; // Place it behind the center slide
  }

  // Function to start the automatic slide transition
  function startSlider() {
    updateSlides(); // Set the initial positions
    // Set an interval to change slides automatically
    setInterval(() => {
      index = (index + 1) % slides.length; // Move to the next slide index (looping back to 0 if needed)
      updateSlides(); // Update the visual display
    }, 3000); // Change slide every 3000 milliseconds (3 seconds)
  }

  // Start the slider when the script runs
  startSlider();
  
  // --- END SLIDER LOGIC ---

}); // End of DOMContentLoaded listener

// contact page //
const inquiryType = document.getElementById('inquiryType');
    const companyDiv = document.getElementById('companyDiv');
    const serviceDiv = document.getElementById('serviceDiv');
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    inquiryType.addEventListener('change', function() {
      if(this.value === 'hire'){
        companyDiv.style.display = 'block';
        serviceDiv.style.display = 'none';
      } else if(this.value === 'service'){
        companyDiv.style.display = 'none';
        serviceDiv.style.display = 'block';
      } else {
        companyDiv.style.display = 'none';
        serviceDiv.style.display = 'none';
      }
    });

    form.addEventListener('submit', function(e){
      e.preventDefault();
      successMessage.classList.add('show');
      form.reset();
      companyDiv.style.display = 'none';
      serviceDiv.style.display = 'none';
      setTimeout(()=>{ successMessage.classList.remove('show'); }, 4000);
    });
    // contact page end //