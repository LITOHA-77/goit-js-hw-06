function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtnColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const bodyValueColor = document.querySelector('.color');

changeBtnColor.addEventListener('click', () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  bodyValueColor.innerHTML = `${getRandomHexColor()}`;
});
