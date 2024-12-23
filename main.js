document.addEventListener('DOMContentLoaded', function() {
  const elements = ["Python Developer", "Full-Stack Developer", "Front-end Developer"];
  let currentIndex = 0;
  const typingElement = document.querySelector(".typing-effect");
  let currentText = '';
  let charIndex = 0;
  let isDeleting = false;

  function type() {
      if (!isDeleting && charIndex < elements[currentIndex].length) {
          currentText += elements[currentIndex].charAt(charIndex);
          charIndex++;
          typingElement.textContent = currentText;
          setTimeout(type, 100);  // Typing speed
      } else if (isDeleting && charIndex >= 0) {
          currentText = currentText.substring(0, charIndex);
          charIndex--;
          typingElement.textContent = currentText;
          setTimeout(type, 50);  // Deleting speed
      } else {
          isDeleting = !isDeleting;
          charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
          currentIndex = !isDeleting ? (currentIndex + 1) % elements.length : currentIndex;
          setTimeout(type, 200);  // Pause between words
      }
  }

  type();
});


 

