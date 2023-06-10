// window.addEventListener("load", function () {
//     const images = document.querySelectorAll(".slideshow-image");
//     let currentImageIndex = 0;
//     let animatedH2s = document.querySelectorAll(".animated-h2");
  
//     function showNextImage() {
//       images[currentImageIndex].classList.remove("active");
//       currentImageIndex = (currentImageIndex + 1) % images.length;
//       images[currentImageIndex].classList.add("active");
  
//       // clearH2s();
//       // animateH2s();
//     }
  
    // function clearH2s() {
    //   animatedH2s.forEach((h2) => {
    //     h2.innerText = "";
    //   });
    // }
  
    // function animateH2s() {
    //   animatedH2s.forEach((h2) => {
    //     animateText(h2);
    //   });
    // }
  
    // function animateText(element) {
    //   let textToAnimate = element.dataset.text;
    //   let currentTextIndex = 0;
  
    //   function appendLetter() {
    //     if (currentTextIndex < textToAnimate.length) {
    //       element.innerText += textToAnimate.charAt(currentTextIndex);
    //       currentTextIndex++;
    //       setTimeout(appendLetter, 150);
    //     }
    //   }
  
    //   appendLetter();
    // }
    // animateH2s();
  //   images[currentImageIndex].classList.add("active");
  
  //   setInterval(showNextImage, 4000);

    
  // });

 function sendMail(){

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value

  }

 if(params.name == '' || params.email == '' || params.message == ''){
 let err_mes =  document.getElementById('success-message')
 err_mes.innerHTML = "Please fill the details for the Message"
 err_mes.style.display = "block";
 err_mes.style.color = "red";

 }else{
  const serviceID = "service_7mktrzl"
  const templateID = "template_b1ropbm"

  emailjs.send(serviceID,templateID , params).then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("phone").value = "";
   console.log(res);
   document.getElementById('success-message').style.display = "block"
   document.getElementById('success-message').style.color = "green"
   document.getElementById('success-message').innerHTML = " Thank you for your message. We will get back to you soon."
    }).catch(err => console.warn(err));
 }



  }

