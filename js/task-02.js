const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(item => {
  const newEl = document.createElement('li');
  newEl.textContent = item;
  newEl.classList.add('item');
  return newEl;
});
listIngredients.append(...ingredientsEl);
