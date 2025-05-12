// script.js

document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
  
    // Open modal
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'flex';
        });
    });
  
    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = 'none';
        });
    });
  
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
  });
  
  //Testimonials section
  
  // script.js
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const testimonials = document.querySelector('.testimonials-carousel');
      const items = document.querySelectorAll('.testimonial-item');
      let currentIndex = 0;
  
      const showTestimonial = (index) => {
          const offset = -index * 100;  // Moves to the left for each index
          testimonials.style.transform = `translateX(${offset}%)`;
      };
  
      document.querySelector('.carousel-btn.next').addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % items.length;  // Loop back to first item
          showTestimonial(currentIndex);
      });
  
      document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + items.length) % items.length;  // Loop back to last item
          showTestimonial(currentIndex);
      });
  });
  
  
  
  //appointment sceduler
  
  // Wait until the DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('appointment-form');
      const responseMessage = document.getElementById('response-message');
      const messageText = document.getElementById('message-text');
  
      // Handle form submission
      form.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent the page from refreshing
  
          // Get the form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const date = document.getElementById('date').value;
          const time = document.getElementById('time').value;
          const message = document.getElementById('message').value;
  
          // Basic validation (you can add more validation if needed)
          if (!name || !email || !date || !time) {
              alert('Please fill out all required fields.');
              return;
          }
  
          // Show the success message
          messageText.innerText = `Thank you, ${name}! Your appointment is scheduled for ${date} at ${time}.`;
          responseMessage.classList.remove('hidden');
  
          // Reset the form after submission
          form.reset();
      });
  });
  
  