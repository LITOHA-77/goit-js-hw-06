const input = document.querySelector('input');
const text = document.querySelector('#text');

input.addEventListener('change', changeSizeText);
function changeSizeText(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
