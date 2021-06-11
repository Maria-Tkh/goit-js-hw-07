const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur);

const borderColor = '#validation-input.valid';
function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length))
  {
    input.classList = 'valid';
  } else input.classList = 'invalid';
  }
  
  
