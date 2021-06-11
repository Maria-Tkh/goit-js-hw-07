
const CategoryQuantity = document.querySelectorAll('li.item').length;
console.log(`В списке ${CategoryQuantity} категории.`);

const CategoryElements = document.querySelectorAll('li.item');
CategoryElements.forEach(CategoryElement => {
    console.log(`Категория: ${CategoryElement.firstElementChild.textContent}
Количество элементов: ${CategoryElement.lastElementChild.children.length}`);
});


