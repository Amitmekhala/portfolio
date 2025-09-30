const messages = [
  "I am a Web Designer & Marketing Automation Expert.",
  "I am a Landing Page & Funnel Specialist.",
  "I am  Web Designer with 100+ landing pages delivered"
];

const element = document.getElementById("animated-text");

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1000;

function type() {
  const currentMessage = messages[messageIndex];

  if (!isDeleting) {
    element.textContent = currentMessage.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentMessage.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    element.textContent = currentMessage.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  }
}

type();

