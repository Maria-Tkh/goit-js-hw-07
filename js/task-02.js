const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('ul');
console.log(ingredientsList);

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    return liEl;
  });
};

const elements = makeIngredients(ingredients);
ingredientsList.append(...elements);


