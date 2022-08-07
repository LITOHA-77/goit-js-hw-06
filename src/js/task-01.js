const categoryEl = document.querySelector('#categories');
console.log(`Number of Categories: ${categoryEl.children.length}`);

const itemEl = categoryEl.querySelectorAll('li.item');

itemEl.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
