const input = document.querySelector('input');

input.addEventListener('blur', onInputValid);

function onInputValid(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
