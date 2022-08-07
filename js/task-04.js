const value = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action = decrement]');
const btnIncrement = document.querySelector('[data-action = increment]');
let counterValue = 0;
btnDecrement.addEventListener('click', () => {
  value.textContent = counterValue -= 1;
});
btnIncrement.addEventListener('click', () => {
  value.textContent = counterValue += 1;
});
