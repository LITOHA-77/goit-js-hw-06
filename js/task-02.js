const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = item;
  ingredientsEl.classList.add('item');
  listIngredients.append(ingredientsEl);
});
