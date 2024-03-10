const textInput = document.getElementById('text-input');
const convertButton = document.getElementById('convert-button');
const errorMessage = document.getElementById('error-message');

let speechSynthesis = window.speechSynthesis; // Check for SpeechSynthesis API support

convertButton.addEventListener('click', () => {
  if (!speechSynthesis) {
    errorMessage.textContent = 'Your browser does not support Text-to-Speech.';
    errorMessage.style.display = 'block';
    return;
  }

  const text = textInput.value.trim();
  if (!text) {
    errorMessage.textContent = 'Please enter text to convert.';
    errorMessage.style.display = 'block';
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);

  errorMessage.style.display = 'none'; // Clear any previous error messages
});
