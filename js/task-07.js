const input = document.querySelector('input#font-size-control');
const textSize = document.querySelector('span#text');

input.addEventListener('input', () =>
    (textSize.style.fontSize = `${input.value}px`),
);
   
    
   
   