import verifyCardNumber from './modules/verify-number'

const inputMessage = document.querySelector('.input');
const outputMessage = document.querySelector('.output');

inputMessage.addEventListener('input', showMessage);

function showMessage(e) {
  if (e.target.value === '') {
    outputMessage.textContent = '';
    return;
  }
  const verificationResult = verifyCardNumber(e.target.value);
  outputMessage.textContent = verificationResult;
}