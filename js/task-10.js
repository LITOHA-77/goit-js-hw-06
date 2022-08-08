// Интересная задача, код писал с помощью, сам пока такую логику не потяну, но опыт наше все :)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const [input, renderBtn, destroyBtn] =
  document.querySelector('#controls').children;

const boxContainer = document.querySelector('#boxes');

let sizeDiv = 30;

const callback = () =>
  +input.value <= +input.getAttribute('max') && +input.value >= 1
    ? createBoxes(+input.value)
    : alert('введите число от  1 до 100');

const createBoxes = amount => {
  let string = '';
  for (let i = 0; i < amount; i += 1) {
    string += `<div style="background-color:${getRandomHexColor()}; width:${sizeDiv}px; height:${sizeDiv}px;"></div>`;

    sizeDiv += 10;
  }

  return boxContainer.insertAdjacentHTML('beforeend', string);
};

const destroyBoxes = () => {
  boxContainer.innerHTML = '';
  input.value = 0;
  sizeDiv = 30;
};
renderBtn.addEventListener('click', callback);
destroyBtn.addEventListener('click', destroyBoxes);
