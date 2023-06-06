window.addEventListener("load", function () {
    const images = document.querySelectorAll(".slideshow-image");
    let currentImageIndex = 0;
    let animatedH2s = document.querySelectorAll(".animated-h2");
  
    function showNextImage() {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add("active");
  
      clearH2s();
      animateH2s();
    }
  
    function clearH2s() {
      animatedH2s.forEach((h2) => {
        h2.innerText = "";
      });
    }
  
    function animateH2s() {
      animatedH2s.forEach((h2) => {
        animateText(h2);
      });
    }
  
    function animateText(element) {
      let textToAnimate = element.dataset.text;
      let currentTextIndex = 0;
  
      function appendLetter() {
        if (currentTextIndex < textToAnimate.length) {
          element.innerText += textToAnimate.charAt(currentTextIndex);
          currentTextIndex++;
          setTimeout(appendLetter, 150);
        }
      }
  
      appendLetter();
    }
    animateH2s();
    images[currentImageIndex].classList.add("active");
  
    setInterval(showNextImage, 4000);

    
  });
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    successMessage.style.display = "block";
    contactForm.reset();
  });
  document.querySelector('.submit-button').addEventListener('click', function() {
    let emailInput = document.getElementById('email-input');
    let emailAddress = encodeURIComponent(emailInput.value);
    let subject = encodeURIComponent('New email submission from FoodKey');
    let mailtoLink = 'mailto:ishazaka1010@gmail.com?subject=' + subject + '&body=' + emailAddress;

    window.location.href = mailtoLink;
  });
